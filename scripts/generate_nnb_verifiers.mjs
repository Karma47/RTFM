import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Edit .local/null-national-bank-secrets.json, then rerun this script to refresh the public shards.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inputPath = path.join(root, ".local", "null-national-bank-secrets.json");
const outputDirectory = path.join(root, "static", "labs", "null-national-bank");
const xorMask = 0x5a;

function splitAlternating(values) {
    const first = [];
    const second = [];

    values.forEach((value, index) => {
        (index % 2 === 0 ? first : second).push(value);
    });

    return [first, second];
}

function hash(value) {
    return createHash("sha256").update(value, "utf8").digest("hex");
}

function requireText(value, label) {
    if (typeof value !== "string" || value.length === 0) {
        throw new Error(`${label} must be a non-empty string.`);
    }

    return value;
}

let config;
try {
    config = JSON.parse(readFileSync(inputPath, "utf8"));
} catch (error) {
    throw new Error(
        `Could not read ${inputPath}. Edit the local secrets file before generating verifier assets.`,
        { cause: error }
    );
}

if (
    !config ||
    typeof config !== "object" ||
    !Array.isArray(config.challenges) ||
    config.challenges.length !== 5
) {
    throw new Error("The local secrets file must define exactly five challenges.");
}

const reportPassword = requireText(config.reportPassword, "Report password");
const shards = [
    { version: 1, entries: [] },
    { version: 1, entries: [] }
];

config.challenges.forEach((challenge, challengeIndex) => {
    const password = requireText(challenge.password, `Challenge ${challengeIndex + 1} password`);
    if (!Array.isArray(challenge.flags) || challenge.flags.length !== 10) {
        throw new Error(`Challenge ${challengeIndex + 1} must define exactly ten flags.`);
    }

    const flags = challenge.flags.map((flag, flagIndex) =>
        requireText(flag, `Challenge ${challengeIndex + 1}, task ${flagIndex + 1} flag`)
    );
    if (new Set(flags).size !== flags.length) {
        throw new Error(`Challenge ${challengeIndex + 1} contains duplicate flags.`);
    }

    const [passwordHashA, passwordHashB] = splitAlternating([...hash(password)]);
    const hiddenPassword = Array.from(Buffer.from(password, "utf8"), (byte) => byte ^ xorMask);
    const [passwordDisplayA, passwordDisplayB] = splitAlternating(hiddenPassword);
    const flagHashes = flags.map((flag) => splitAlternating([...hash(flag)]));

    shards[0].entries.push({
        p: passwordHashA.join(""),
        r: passwordDisplayA,
        f: flagHashes.map(([first]) => first.join(""))
    });
    shards[1].entries.push({
        p: passwordHashB.join(""),
        r: passwordDisplayB,
        f: flagHashes.map(([, second]) => second.join(""))
    });
});

const [reportHashA, reportHashB] = splitAlternating([...hash(reportPassword)]);
const hiddenReportPassword = Array.from(Buffer.from(reportPassword, "utf8"), (byte) => byte ^ xorMask);
const [reportDisplayA, reportDisplayB] = splitAlternating(hiddenReportPassword);
shards[0].report = { p: reportHashA.join(""), r: reportDisplayA };
shards[1].report = { p: reportHashB.join(""), r: reportDisplayB };

writeFileSync(
    path.join(outputDirectory, "verifier-a.json"),
    `${JSON.stringify(shards[0], null, 2)}\n`
);
writeFileSync(
    path.join(outputDirectory, "verifier-b.json"),
    `${JSON.stringify(shards[1], null, 2)}\n`
);

console.log("Generated split verifier assets. Commit the JSON shards, never the local secrets file.");
