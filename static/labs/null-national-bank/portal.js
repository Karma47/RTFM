async function sha256Hex(value) {
    if (!globalThis.crypto?.subtle || typeof TextEncoder === "undefined") {
        throw new Error("The Web Crypto API is unavailable.");
    }

    const bytes = new TextEncoder().encode(value);
    const digest = await globalThis.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), (byte) =>
        byte.toString(16).padStart(2, "0")
    ).join("");
}

const verifierBasePath = "/labs/null-national-bank/";
const passwordMask = 0x5a;
const reportContentPath = "/labs/null-national-bank/content/threat-report.html";

async function loadStaticContent(path, label) {
    const response = await fetch(path, { cache: "no-cache" });
    if (!response.ok) {
        throw new Error(`${label} failed to load (HTTP ${response.status}).`);
    }

    const content = await response.text();
    if (!content.trim()) {
        throw new Error(`${label} is empty.`);
    }

    return content;
}

function weave(first, second) {
    if (!Array.isArray(first) || !Array.isArray(second) || Math.abs(first.length - second.length) > 1) {
        throw new Error("Challenge verifier data has invalid fragments.");
    }

    const result = [];
    for (let index = 0; index < Math.max(first.length, second.length); index++) {
        if (index < first.length) {
            result.push(first[index]);
        }
        if (index < second.length) {
            result.push(second[index]);
        }
    }

    return result;
}

function joinHash(first, second) {
    if (typeof first !== "string" || typeof second !== "string") {
        throw new Error("Challenge verifier data has an invalid hash fragment.");
    }

    return weave([...first], [...second]).join("");
}

function validateVerifierParts(first, second) {
    if (
        first?.version !== 1 ||
        second?.version !== 1 ||
        !Array.isArray(first.entries) ||
        !Array.isArray(second.entries) ||
        first.entries.length !== challenges.length ||
        second.entries.length !== challenges.length
    ) {
        throw new Error("Challenge verifier assets have an unsupported format.");
    }

    challenges.forEach((challenge, challengeIndex) => {
        const firstEntry = first.entries[challengeIndex];
        const secondEntry = second.entries[challengeIndex];
        if (
            !firstEntry ||
            !secondEntry ||
            !/^[0-9a-f]{32}$/.test(firstEntry.p) ||
            !/^[0-9a-f]{32}$/.test(secondEntry.p) ||
            !Array.isArray(firstEntry.r) ||
            !Array.isArray(secondEntry.r) ||
            !firstEntry.r.every((byte) => Number.isInteger(byte) && byte >= 0 && byte <= 255) ||
            !secondEntry.r.every((byte) => Number.isInteger(byte) && byte >= 0 && byte <= 255) ||
            !Array.isArray(firstEntry.f) ||
            !Array.isArray(secondEntry.f) ||
            firstEntry.f.length !== challenge.tasks.length ||
            secondEntry.f.length !== challenge.tasks.length
        ) {
            throw new Error(`Challenge verifier data is invalid for challenge ${challengeIndex + 1}.`);
        }

        firstEntry.f.forEach((fragment, taskIndex) => {
            if (
                !/^[0-9a-f]{32}$/.test(fragment) ||
                !/^[0-9a-f]{32}$/.test(secondEntry.f[taskIndex])
            ) {
                throw new Error(
                    `Challenge verifier data is invalid for challenge ${challengeIndex + 1}, task ${taskIndex + 1}.`
                );
            }
        });

        weave(firstEntry.r, secondEntry.r);
    });

    if (
        !first.report ||
        !second.report ||
        !/^[0-9a-f]{32}$/.test(first.report.p) ||
        !/^[0-9a-f]{32}$/.test(second.report.p) ||
        !Array.isArray(first.report.r) ||
        !Array.isArray(second.report.r) ||
        !first.report.r.every((byte) => Number.isInteger(byte) && byte >= 0 && byte <= 255) ||
        !second.report.r.every((byte) => Number.isInteger(byte) && byte >= 0 && byte <= 255)
    ) {
        throw new Error("Report verifier data has an invalid format.");
    }

    weave(first.report.r, second.report.r);
}

async function loadVerifierParts() {
    const responses = await Promise.all([
        fetch(`${verifierBasePath}verifier-a.json`, { cache: "no-store" }),
        fetch(`${verifierBasePath}verifier-b.json`, { cache: "no-store" })
    ]);

    if (responses.some((response) => !response.ok)) {
        throw new Error("A challenge verifier asset could not be loaded.");
    }

    const [first, second] = await Promise.all(responses.map((response) => response.json()));
    validateVerifierParts(first, second);
    return [first, second];
}

function revealPassword(first, second, challengeNumber) {
    if (typeof TextDecoder === "undefined") {
        throw new Error("Password display is unavailable in this browser.");
    }

    const encoded = weave(
        first.entries[challengeNumber - 1].r,
        second.entries[challengeNumber - 1].r
    );
    const bytes = encoded.map((byte) => byte ^ passwordMask);
    return new TextDecoder().decode(new Uint8Array(bytes));
}

function revealReportPassword(first, second) {
    if (typeof TextDecoder === "undefined") {
        throw new Error("Report password display is unavailable in this browser.");
    }

    const encoded = weave(first.report.r, second.report.r);
    const bytes = encoded.map((byte) => byte ^ passwordMask);
    return new TextDecoder().decode(new Uint8Array(bytes));
}

function drawPassword(canvas, password) {
    const context = canvas.getContext("2d");
    if (!context) {
        canvas.replaceWith(document.createTextNode("Password display is unavailable."));
        return;
    }

    const font = "17.6px monospace";
    context.font = font;
    canvas.width = Math.ceil(context.measureText(password).width) + 28;
    canvas.height = 40;
    context.font = font;
    context.fillStyle = "#0f172a";
    context.textBaseline = "middle";
    context.fillText(password, 14, 20);
}

const challenges = [
    {
        title: "Initial Access",
        situation:
            "The SOC is investigating suspicious authentication activity across the bank.",
        objective:
            "Determine which employee account was compromised during the initial access.",
        evidence:
            "Review authentication events in the instructor-provided Splunk environment.",
        walkthrough: "/labs/null-national-bank/content/walkthroughs/phase-01.html",
        tasks: [
            { prompt: "Identify the compromised employee account." },
            { prompt: "Identify the source IP address for the suspicious login." },
            { prompt: "Identify the workstation targeted during initial access." },
            { prompt: "What Windows event ID records a successful logon?" },
            { prompt: "What Windows event ID records a failed logon?" },
            { prompt: "Identify the logon type associated with a remote interactive session." },
            { prompt: "Identify the remote access protocol used in the initial access." },
            { prompt: "What authentication technique is indicated by many failed attempts followed by a success?" },
            { prompt: "Identify the executable commonly associated with an RDP client." },
            { prompt: "What was the outcome of the attacker's final authentication attempt?" }
        ],
    },
    {
        title: "Execution & Persistence",
        situation:
            "The initial access investigation is complete. Investigators are now examining endpoint activity.",
        objective:
            "Find the process associated with the attacker's execution and persistence activity.",
        evidence:
            "Review Windows and Sysmon telemetry in the instructor-provided Splunk environment.",
        image: "/labs/null-national-bank/images/01_phase.svg",
        walkthrough: "/labs/null-national-bank/content/walkthroughs/phase-02.html",
        tasks: [
            { prompt: "Identify the process associated with the attacker's execution." },
            { prompt: "Which PowerShell option is commonly used to execute a Base64-encoded command?" },
            { prompt: "Identify the Windows script host used to execute a VBScript file." },
            { prompt: "Identify the command-line utility used to create a scheduled task." },
            { prompt: "Which registry key is commonly used for per-user startup persistence?" },
            { prompt: "What Windows event ID records process creation?" },
            { prompt: "What Windows event ID records a new service installation?" },
            { prompt: "Identify the encoding format often used to obscure PowerShell commands." },
            { prompt: "Which Sysmon event ID records process creation?" },
            { prompt: "What persistence mechanism is created by a task configured to run on a schedule?" }
        ],
    },
    {
        title: "Privilege Escalation",
        situation:
            "Endpoint activity has been identified, and the investigation is tracing suspicious privilege use.",
        objective:
            "Determine which privileged account was compromised.",
        evidence:
            "Review authentication and Windows security events in the instructor-provided Splunk environment.",
        walkthrough: "/labs/null-national-bank/content/walkthroughs/phase-03.html",
        image: "/labs/null-national-bank/images/02_phase.svg",
        tasks: [
            { prompt: "Identify the compromised privileged account." },
            { prompt: "What Windows event ID records special privileges assigned to a new logon?" },
            { prompt: "Identify the privileged Active Directory group targeted in the escalation." },
            { prompt: "Which privilege allows a process to debug and adjust the memory of other processes?" },
            { prompt: "Identify the built-in Windows utility that can run a program as another user." },
            { prompt: "Which local group grants administrative rights on a Windows computer?" },
            { prompt: "What Windows event ID records a successful logon?" },
            { prompt: "What Windows event ID records a user account being added to a security-enabled group?" },
            { prompt: "What access-control technique abuses elevated rights to gain higher privileges?" },
            { prompt: "What is the status of an account after it has obtained elevated permissions?" }
        ],
    },
    {
        title: "Lateral Movement",
        situation:
            "The investigation is following activity from the compromised privileged account to other systems.",
        objective:
            "Identify the destination host involved in the lateral movement.",
        evidence:
            "Correlate endpoint and authentication events in the instructor-provided Splunk environment.",
        walkthrough: "/labs/null-national-bank/content/walkthroughs/phase-04.html",
        image: "/labs/null-national-bank/images/03_phase.svg",    
        tasks: [
            { prompt: "Identify the destination host involved in lateral movement." },
            { prompt: "Which TCP port is commonly used by SMB for file sharing?" },
            { prompt: "Identify the Windows utility commonly associated with remote service execution." },
            { prompt: "What Windows event ID records a successful logon?" },
            { prompt: "What logon type is commonly associated with network logons?" },
            { prompt: "Which hidden administrative share exposes the Windows directory over SMB?" },
            { prompt: "Identify the source workstation from which lateral movement began." },
            { prompt: "Which Windows management technology can be used to execute commands remotely?" },
            { prompt: "Which protocol is commonly used by PsExec to communicate with a remote Windows host?" },
            { prompt: "Identify the authentication protocol commonly seen with Windows network logons." }
        ],
    },
    {
        title: "Domain Compromise",
        situation:
            "The SOC is assessing the final impact of the Threat across the bank's domain.",
        objective:
            "Identify the indicator that confirms the domain compromise.",
        evidence:
            "Review the related Windows and domain activity in the instructor-provided Splunk environment.",
        walkthrough: "/labs/null-national-bank/content/walkthroughs/phase-05.html",
        image: "/labs/null-national-bank/images/04_phase.svg",
        tasks: [
            { prompt: "Identify the account privilege that confirms domain compromise." },
            { prompt: "Which Active Directory database file contains domain account data?" },
            { prompt: "What replication technique can be abused to retrieve password hashes from a domain controller?" },
            { prompt: "Which Windows process commonly holds credentials in memory?" },
            { prompt: "Identify the credential-dumping tool commonly associated with LSASS access." },
            { prompt: "Which built-in domain account is used by Kerberos to encrypt ticket-granting tickets?" },
            { prompt: "Which Active Directory group has the highest level of domain-wide administrative privileges?" },
            { prompt: "What Windows event ID records a new user account being created?" },
            { prompt: "What Kerberos ticket type is commonly requested during Kerberoasting?" },
            { prompt: "What forged Kerberos ticket can grant an attacker broad domain access?" }
        ],
    }
];

const root = document.getElementById("nn-bank-portal");

if (root) {
    root.innerHTML = '<p class="nn-loading">Loading challenge...</p>';
    const reportPage = root.dataset.reportPage === "true";
    const challengeNumber = Number(root.dataset.challenge);
    if (
        !reportPage &&
        (!Number.isInteger(challengeNumber) ||
            challengeNumber < 1 ||
            challengeNumber > challenges.length)
    ) {
        throw new Error("Null National Bank portal has an invalid challenge number.");
    }

    const initialization = reportPage
        ? initializeReportPortal(root)
        : initializePortal(root, challengeNumber);
    initialization.catch((error) => {
        console.error("Challenge portal initialization failed.", error);
        root.textContent =
            "The challenge portal could not start. Refresh the page or contact your instructor.";
    });
}

async function initializePortal(root, challengeNumber) {
    const [verifierA, verifierB] = await loadVerifierParts();
    const challenge = challenges[challengeNumber - 1];
    const legacyProgressKey = "nn_task_progress_v2";
    if (localStorage.getItem(legacyProgressKey) !== null) {
        localStorage.removeItem(legacyProgressKey);
    }

    const progressKey = "nn_task_completion_v3";
    const progress = JSON.parse(localStorage.getItem(progressKey) || "{}");

    if (!progress || typeof progress !== "object" || Array.isArray(progress)) {
        throw new Error("Null National Bank portal has invalid saved progress.");
    }

    function completedTasksFor(number) {
        const savedTasks = progress[String(number)] || [];
        if (
            !Array.isArray(savedTasks) ||
            savedTasks.some(
                (taskIndex) =>
                    !Number.isInteger(taskIndex) ||
                    taskIndex < 0 ||
                    taskIndex >= challenges[number - 1].tasks.length
            )
        ) {
            throw new Error(`Null National Bank portal has invalid saved tasks for challenge ${number}.`);
        }

        return Array.from(new Set(savedTasks));
    }

    function challengeIsComplete(number) {
        return completedTasksFor(number).length === challenges[number - 1].tasks.length;
    }

    let passwordAccepted = challengeIsComplete(challengeNumber);
    let walkthroughAccepted = false;
    let walkthroughLoading = false;
    let walkthroughMarkup = "";
    let walkthroughError = "";
    let activeTab = "challenge";

    async function loadWalkthrough() {
        walkthroughLoading = true;
        walkthroughError = "";
        render();
        try {
            walkthroughMarkup = await loadStaticContent(
                challenge.walkthrough,
                `Challenge ${challengeNumber} walkthrough`
            );
        } catch (error) {
            console.error(`Challenge ${challengeNumber} walkthrough could not be loaded.`, error);
            walkthroughError = "The walkthrough could not be loaded. Check the Markdown file or retry.";
        }
        walkthroughLoading = false;
        render();
    }

    function render() {
        const previousChallengesComplete = challenges
            .slice(0, challengeNumber - 1)
            .every((_, index) => challengeIsComplete(index + 1));
        const completedTasks = completedTasksFor(challengeNumber);
        const completedTaskSet = new Set(completedTasks);
        const challengeComplete = completedTasks.length === challenge.tasks.length;

        const challengeContent = !previousChallengesComplete
            ? `
                <p>This challenge is locked. Submit all 10 flags in Challenge ${challengeNumber - 1} first.</p>
                <a class="nn-button" href="../challenge-${String(challengeNumber - 1).padStart(2, "0")}/">
                    Return to Challenge ${String(challengeNumber - 1).padStart(2, "0")}
                </a>
            `
            : !passwordAccepted
              ? `
                    <p>Enter the challenge password to continue.</p>
                    <form class="nn-password-form" data-password-purpose="challenge">
                        <label for="nn-challenge-password">CHALLENGE PASSWORD</label>
                        <input id="nn-challenge-password" type="password" autocomplete="off" required>
                        <button type="submit">Unlock Challenge</button>
                        <p class="nn-message" data-password-message aria-live="polite"></p>
                    </form>
                `
              : `
                    <section class="nn-brief">
                        <h3>Situation</h3>
                        <p>${challenge.situation}</p>
                        <h3>Investigation objective</h3>
                        <p>${challenge.objective}</p>
                        <h3>Evidence</h3>
                        <p>${challenge.evidence}</p>
                        ${
                            challenge.image
                                ? `<img class="nn-evidence-image" src="${challenge.image}" alt="Null National Bank network diagram showing hosts and numbered attack stages">`
                                : ""
                        }
                    </section>
                    <p class="nn-progress" role="status">
                        ${completedTasks.length} / ${challenge.tasks.length} flags submitted
                    </p>
                    <div class="nn-task-list">
                        ${challenge.tasks.map((task, index) => {
                            const complete = completedTaskSet.has(index);
                            return `
                                <section class="nn-task" data-complete="${complete}">
                                    <h3>Task ${index + 1}</h3>
                                    <p>${task.prompt}</p>
                                    ${
                                        complete
                                            ? '<p class="nn-message" role="status">Flag validated.</p>'
                                            : `
                                                <form class="nn-task-form" data-task-index="${index}">
                                                    <label for="flag-input-${index}">FLAG</label>
                                                    <input id="flag-input-${index}" type="text" autocomplete="off" spellcheck="false" required>
                                                    <button type="submit">Submit Flag</button>
                                                    <p class="nn-message" id="flag-message-${index}" aria-live="polite"></p>
                                                </form>
                                            `
                                    }
                                </section>
                            `;
                        }).join("")}
                    </div>
                    ${
                        challengeComplete
                            ? `
                                <p class="nn-message" role="status">Challenge completed. All 10 flags are validated.</p>
                                <div class="nn-next-password">
                                    <p>${challengeNumber < challenges.length ? `Challenge ${challengeNumber + 1} password` : "Report and Challenge 5 walkthrough password"}</p>
                                    <canvas id="next-password-display" role="img" aria-label="Next password"></canvas>
                                </div>
                                ${
                                    challengeNumber < challenges.length
                                        ? `<a class="nn-button" href="../challenge-${String(challengeNumber + 1).padStart(2, "0")}/">Continue to Challenge ${String(challengeNumber + 1).padStart(2, "0")}</a>`
                                        : '<a class="nn-button" href="../report/">Open Threat Report</a>'
                                }
                            `
                            : ""
                    }
                `;

        const walkthroughContent = !walkthroughAccepted
            ? `
                <p>Enter the completion password to read this phase's walkthrough.</p>
                <form class="nn-password-form" data-password-purpose="walkthrough">
                    <label for="nn-walkthrough-password">WALKTHROUGH PASSWORD</label>
                    <input id="nn-walkthrough-password" type="password" autocomplete="off" required>
                    <button type="submit">Unlock Walkthrough</button>
                    <p class="nn-message" data-password-message aria-live="polite"></p>
                </form>
            `
            : walkthroughLoading
              ? '<p role="status">Loading walkthrough...</p>'
              : walkthroughError
                ? `
                    <p class="nn-message" role="alert">${walkthroughError}</p>
                    <button id="nn-retry-walkthrough" type="button">Retry</button>
                `
                : `<section class="nn-walkthrough-content nn-static-content">${walkthroughMarkup}</section>`;

        root.innerHTML = `
            <div class="nn-header">
                <h2>NULL NATIONAL BANK</h2>
                <p>Security Operations Centre</p>
            </div>
            <div class="nn-panel">
                <p class="nn-eyebrow">CHALLENGE ${challengeNumber} / ${challenges.length}</p>
                <h2>${challenge.title}</h2>
                <div class="nn-tabs" role="tablist" aria-label="Challenge sections">
                    <button class="nn-tab" type="button" role="tab" aria-selected="${activeTab === "challenge"}" data-portal-tab="challenge">Challenge</button>
                    <button class="nn-tab" type="button" role="tab" aria-selected="${activeTab === "walkthrough"}" data-portal-tab="walkthrough">Walkthrough</button>
                </div>
                <section class="nn-tab-panel" role="tabpanel">
                    ${activeTab === "challenge" ? challengeContent : walkthroughContent}
                </section>
            </div>
        `;

        root.querySelectorAll("[data-portal-tab]").forEach((tab) => {
            tab.addEventListener("click", () => {
                activeTab = tab.dataset.portalTab;
                render();
            });
        });

        root.querySelector("#nn-retry-walkthrough")?.addEventListener("click", loadWalkthrough);

        const passwordCanvas = root.querySelector("#next-password-display");
        if (passwordCanvas) {
            const password =
                challengeNumber < challenges.length
                    ? revealPassword(verifierA, verifierB, challengeNumber + 1)
                    : revealReportPassword(verifierA, verifierB);
            drawPassword(passwordCanvas, password);
        }

        root.querySelectorAll(".nn-password-form").forEach((passwordForm) => {
            passwordForm.addEventListener("submit", async (event) => {
                event.preventDefault();
                const submitted = passwordForm.querySelector("input").value.trim();
                const message = passwordForm.querySelector("[data-password-message]");
                let submittedHash;
                try {
                    submittedHash = await sha256Hex(submitted);
                } catch (error) {
                    console.error("Portal password verification failed.", error);
                    message.textContent =
                        "Password verification is unavailable. Reload the page and try again.";
                    return;
                }

                const expectedHash =
                    passwordForm.dataset.passwordPurpose === "challenge"
                        ? joinHash(
                              verifierA.entries[challengeNumber - 1].p,
                              verifierB.entries[challengeNumber - 1].p
                          )
                        : challengeNumber < challenges.length
                          ? joinHash(
                                verifierA.entries[challengeNumber].p,
                                verifierB.entries[challengeNumber].p
                            )
                          : joinHash(verifierA.report.p, verifierB.report.p);
                if (submittedHash === expectedHash) {
                    if (passwordForm.dataset.passwordPurpose === "challenge") {
                        passwordAccepted = true;
                        render();
                    } else {
                        walkthroughAccepted = true;
                        await loadWalkthrough();
                    }
                } else {
                    message.textContent = "Incorrect password. Try again.";
                }
            });
        });

        root.querySelectorAll(".nn-task-form").forEach((flagForm) => {
            flagForm.addEventListener("submit", async (event) => {
                event.preventDefault();
                const taskIndex = Number(flagForm.dataset.taskIndex);
                const submitted = document.getElementById(`flag-input-${taskIndex}`).value.trim();
                const message = document.getElementById(`flag-message-${taskIndex}`);
                let submittedHash;
                try {
                    submittedHash = await sha256Hex(submitted);
                } catch (error) {
                    console.error("Challenge flag verification failed.", error);
                    message.textContent =
                        "Flag verification is unavailable. Reload the page and try again.";
                    return;
                }

                const expectedHash = joinHash(
                    verifierA.entries[challengeNumber - 1].f[taskIndex],
                    verifierB.entries[challengeNumber - 1].f[taskIndex]
                );
                if (submittedHash === expectedHash) {
                    const savedTasks = new Set(progress[String(challengeNumber)] || []);
                    savedTasks.add(taskIndex);
                    progress[String(challengeNumber)] = Array.from(savedTasks);
                    localStorage.setItem(progressKey, JSON.stringify(progress));
                    render();
                } else {
                    message.textContent = "Incorrect flag. Try again.";
                }
            });
        });
    }

    render();
}

async function initializeReportPortal(root) {
    const [verifierA, verifierB] = await loadVerifierParts();
    const expectedHash = joinHash(verifierA.report.p, verifierB.report.p);
    let reportAccepted = false;
    let reportLoading = false;
    let reportMarkup = "";
    let reportError = "";

    async function loadReport() {
        reportLoading = true;
        reportError = "";
        render();
        try {
            reportMarkup = await loadStaticContent(reportContentPath, "Threat Report");
        } catch (error) {
            console.error("Threat Report could not be loaded.", error);
            reportError = "The Threat Report could not be loaded. Check the Markdown file or retry.";
        }
        reportLoading = false;
        render();
    }

    function render() {
        root.innerHTML = `
            <div class="nn-header">
                <h2>NULL NATIONAL BANK</h2>
                <p>Threat Report</p>
            </div>
            <div class="nn-panel">
                ${
                    !reportAccepted
                        ? `
                            <h2>Unlock Threat Report</h2>
                            <p>Enter the password provided after completing Challenge 5.</p>
                            <form class="nn-password-form">
                                <label for="nn-report-password">REPORT PASSWORD</label>
                                <input id="nn-report-password" type="password" autocomplete="off" required>
                                <button type="submit">Unlock Report</button>
                                <p class="nn-message" data-password-message aria-live="polite"></p>
                            </form>
                        `
                        : reportLoading
                          ? '<p role="status">Loading Threat Report...</p>'
                          : reportError
                            ? `
                                <p class="nn-message" role="alert">${reportError}</p>
                                <button id="nn-retry-report" type="button">Retry</button>
                                <a class="nn-button" href="../challenge-05/">Return to Challenge 5</a>
                            `
                            : `
                                <section class="nn-static-content">${reportMarkup}</section>
                                <a class="nn-button" href="../challenge-05/">Return to Challenge 5</a>
                            `
                }
            </div>
        `;

        root.querySelector("#nn-retry-report")?.addEventListener("click", loadReport);

        const passwordForm = root.querySelector(".nn-password-form");
        if (passwordForm) {
            passwordForm.addEventListener("submit", async (event) => {
                event.preventDefault();
                const submitted = passwordForm.querySelector("input").value.trim();
                const message = passwordForm.querySelector("[data-password-message]");
                let submittedHash;
                try {
                    submittedHash = await sha256Hex(submitted);
                } catch (error) {
                    console.error("Report password verification failed.", error);
                    message.textContent =
                        "Password verification is unavailable. Reload the page and try again.";
                    return;
                }

                if (submittedHash === expectedHash) {
                    reportAccepted = true;
                    await loadReport();
                } else {
                    message.textContent = "Incorrect password. Try again.";
                }
            });
        }
    }

    render();
}
