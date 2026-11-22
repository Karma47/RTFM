const challenges = [
    {
        title: "Initial Access",
        situation:
            "The SOC is investigating suspicious authentication activity across the bank.",
        objective:
            "Determine which employee account was compromised during the initial access.",
        evidence:
            "Review authentication events in the instructor-provided Splunk environment.",
        tasks: [
            { prompt: "Identify the compromised employee account.", flag: "FLAG{neha.gupta}" },
            { prompt: "Identify the source IP address for the suspicious login.", flag: "FLAG{203.0.113.47}" },
            { prompt: "Identify the workstation targeted during initial access.", flag: "FLAG{WS-FIN-023}" },
            { prompt: "What Windows event ID records a successful logon?", flag: "FLAG{4624}" },
            { prompt: "What Windows event ID records a failed logon?", flag: "FLAG{4625}" },
            { prompt: "Identify the logon type associated with a remote interactive session.", flag: "FLAG{10}" },
            { prompt: "Identify the remote access protocol used in the initial access.", flag: "FLAG{RDP}" },
            { prompt: "What authentication technique is indicated by many failed attempts followed by a success?", flag: "FLAG{password-spray}" },
            { prompt: "Identify the executable commonly associated with an RDP client.", flag: "FLAG{mstsc.exe}" },
            { prompt: "What was the outcome of the attacker's final authentication attempt?", flag: "FLAG{success}" }
        ],
        password: "NNB-START-01"
    },
    {
        title: "Execution & Persistence",
        situation:
            "The initial access investigation is complete. Investigators are now examining endpoint activity.",
        objective:
            "Find the process associated with the attacker's execution and persistence activity.",
        evidence:
            "Review Windows and Sysmon telemetry in the instructor-provided Splunk environment.",
        tasks: [
            { prompt: "Identify the process associated with the attacker's execution.", flag: "FLAG{powershell.exe}" },
            { prompt: "Which PowerShell option is commonly used to execute a Base64-encoded command?", flag: "FLAG{-enc}" },
            { prompt: "Identify the Windows script host used to execute a VBScript file.", flag: "FLAG{wscript.exe}" },
            { prompt: "Identify the command-line utility used to create a scheduled task.", flag: "FLAG{schtasks.exe}" },
            { prompt: "Which registry key is commonly used for per-user startup persistence?", flag: "FLAG{HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run}" },
            { prompt: "What Windows event ID records process creation?", flag: "FLAG{4688}" },
            { prompt: "What Windows event ID records a new service installation?", flag: "FLAG{7045}" },
            { prompt: "Identify the encoding format often used to obscure PowerShell commands.", flag: "FLAG{base64}" },
            { prompt: "Which Sysmon event ID records process creation?", flag: "FLAG{1}" },
            { prompt: "What persistence mechanism is created by a task configured to run on a schedule?", flag: "FLAG{scheduled-task}" }
        ],
        password: "NNB-EXEC-02"
    },
    {
        title: "Privilege Escalation",
        situation:
            "Endpoint activity has been identified, and the investigation is tracing suspicious privilege use.",
        objective:
            "Determine which privileged account was compromised.",
        evidence:
            "Review authentication and Windows security events in the instructor-provided Splunk environment.",
        tasks: [
            { prompt: "Identify the compromised privileged account.", flag: "FLAG{rajesh.kumar}" },
            { prompt: "What Windows event ID records special privileges assigned to a new logon?", flag: "FLAG{4672}" },
            { prompt: "Identify the privileged Active Directory group targeted in the escalation.", flag: "FLAG{Domain Admins}" },
            { prompt: "Which privilege allows a process to debug and adjust the memory of other processes?", flag: "FLAG{SeDebugPrivilege}" },
            { prompt: "Identify the built-in Windows utility that can run a program as another user.", flag: "FLAG{runas.exe}" },
            { prompt: "Which local group grants administrative rights on a Windows computer?", flag: "FLAG{Administrators}" },
            { prompt: "What Windows event ID records a successful logon?", flag: "FLAG{4624}" },
            { prompt: "What Windows event ID records a user account being added to a security-enabled group?", flag: "FLAG{4728}" },
            { prompt: "What access-control technique abuses elevated rights to gain higher privileges?", flag: "FLAG{privilege-escalation}" },
            { prompt: "What is the status of an account after it has obtained elevated permissions?", flag: "FLAG{elevated}" }
        ],
        password: "NNB-PRIV-03"
    },
    {
        title: "Lateral Movement",
        situation:
            "The investigation is following activity from the compromised privileged account to other systems.",
        objective:
            "Identify the destination host involved in the lateral movement.",
        evidence:
            "Correlate endpoint and authentication events in the instructor-provided Splunk environment.",
        tasks: [
            { prompt: "Identify the destination host involved in lateral movement.", flag: "FLAG{MN-DC01}" },
            { prompt: "Which TCP port is commonly used by SMB for file sharing?", flag: "FLAG{445}" },
            { prompt: "Identify the Windows utility commonly associated with remote service execution.", flag: "FLAG{PsExec.exe}" },
            { prompt: "What Windows event ID records a successful logon?", flag: "FLAG{4624}" },
            { prompt: "What logon type is commonly associated with network logons?", flag: "FLAG{3}" },
            { prompt: "Which hidden administrative share exposes the Windows directory over SMB?", flag: "FLAG{ADMIN$}" },
            { prompt: "Identify the source workstation from which lateral movement began.", flag: "FLAG{WS-FIN-023}" },
            { prompt: "Which Windows management technology can be used to execute commands remotely?", flag: "FLAG{WMI}" },
            { prompt: "Which protocol is commonly used by PsExec to communicate with a remote Windows host?", flag: "FLAG{SMB}" },
            { prompt: "Identify the authentication protocol commonly seen with Windows network logons.", flag: "FLAG{NTLM}" }
        ],
        password: "NNB-LATERAL-04"
    },
    {
        title: "Domain Compromise",
        situation:
            "The SOC is assessing the final impact of the incident across the bank's domain.",
        objective:
            "Identify the indicator that confirms the domain compromise.",
        evidence:
            "Review the related Windows and domain activity in the instructor-provided Splunk environment.",
        tasks: [
            { prompt: "Identify the account privilege that confirms domain compromise.", flag: "FLAG{domain_admin}" },
            { prompt: "Which Active Directory database file contains domain account data?", flag: "FLAG{ntds.dit}" },
            { prompt: "What replication technique can be abused to retrieve password hashes from a domain controller?", flag: "FLAG{DCSync}" },
            { prompt: "Which Windows process commonly holds credentials in memory?", flag: "FLAG{lsass.exe}" },
            { prompt: "Identify the credential-dumping tool commonly associated with LSASS access.", flag: "FLAG{mimikatz.exe}" },
            { prompt: "Which built-in domain account is used by Kerberos to encrypt ticket-granting tickets?", flag: "FLAG{krbtgt}" },
            { prompt: "Which Active Directory group has the highest level of domain-wide administrative privileges?", flag: "FLAG{Domain Admins}" },
            { prompt: "What Windows event ID records a new user account being created?", flag: "FLAG{4720}" },
            { prompt: "What Kerberos ticket type is commonly requested during Kerberoasting?", flag: "FLAG{TGS}" },
            { prompt: "What forged Kerberos ticket can grant an attacker broad domain access?", flag: "FLAG{Golden Ticket}" }
        ],
        password: "NNB-LATERAL-05"
    }
];

const root = document.getElementById("nn-bank-portal");

if (root) {
    const challengeNumber = Number(root.dataset.challenge);

    if (
        !Number.isInteger(challengeNumber) ||
        challengeNumber < 1 ||
        challengeNumber > challenges.length
    ) {
        throw new Error("Null National Bank portal has an invalid challenge number.");
    }

    const challenge = challenges[challengeNumber - 1];
    const nextChallenge = challenges[challengeNumber];
    const progressKey = "nn_task_progress_v2";
    const progress = JSON.parse(localStorage.getItem(progressKey) || "{}");

    if (!progress || typeof progress !== "object" || Array.isArray(progress)) {
        throw new Error("Null National Bank portal has invalid saved progress.");
    }

    function completedFlagsFor(number) {
        const savedFlags = progress[String(number)] || [];
        if (!Array.isArray(savedFlags) || savedFlags.some((flag) => typeof flag !== "string")) {
            throw new Error(`Null National Bank portal has invalid saved flags for challenge ${number}.`);
        }

        const accepted = new Set(savedFlags);
        return challenges[number - 1].tasks
            .filter((task) => accepted.has(task.flag))
            .map((task) => task.flag);
    }

    function challengeIsComplete(number) {
        return completedFlagsFor(number).length === challenges[number - 1].tasks.length;
    }

    let passwordAccepted = challengeIsComplete(challengeNumber);

    function render() {
        const previousChallengesComplete = challenges
            .slice(0, challengeNumber - 1)
            .every((_, index) => challengeIsComplete(index + 1));
        const completedFlags = completedFlagsFor(challengeNumber);
        const completedFlagSet = new Set(completedFlags);
        const challengeComplete = completedFlags.length === challenge.tasks.length;

        root.innerHTML = `
            <div class="nn-header">
                <h2>NULL NATIONAL BANK</h2>
                <p>Security Operations Centre</p>
            </div>
            <div class="nn-panel">
                <p class="nn-eyebrow">CHALLENGE ${challengeNumber} / ${challenges.length}</p>
                <h2>${challenge.title}</h2>
                ${
                    !previousChallengesComplete
                        ? `
                            <p>This challenge is locked. Submit all 10 flags in Challenge ${challengeNumber - 1} first.</p>
                            <a class="nn-button" href="../challenge-${String(challengeNumber - 1).padStart(2, "0")}/">
                                Return to Challenge ${String(challengeNumber - 1).padStart(2, "0")}
                            </a>
                        `
                        : !passwordAccepted
                          ? `
                            <p>Enter the challenge password to continue.</p>
                            <form id="password-form">
                                <label for="password-input">CHALLENGE PASSWORD</label>
                                <input id="password-input" type="password" autocomplete="off" required>
                                <button type="submit">Unlock Challenge</button>
                            </form>
                            <p class="nn-message" id="password-message" aria-live="polite"></p>
                        `
                          : `
                            <section class="nn-brief">
                                <h3>Situation</h3>
                                <p>${challenge.situation}</p>
                                <h3>Investigation objective</h3>
                                <p>${challenge.objective}</p>
                                <h3>Evidence</h3>
                                <p>${challenge.evidence}</p>
                            </section>
                            <p class="nn-progress" role="status">
                                ${completedFlags.length} / ${challenge.tasks.length} flags submitted
                            </p>
                            <div class="nn-task-list">
                                ${challenge.tasks.map((task, index) => {
                                    const complete = completedFlagSet.has(task.flag);
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
                                        ${
                                            nextChallenge
                                                ? `
                                                    <div class="nn-next-password">
                                                        <p>Challenge ${challengeNumber + 1} password</p>
                                                        <code>${nextChallenge.password}</code>
                                                    </div>
                                                    <a class="nn-button" href="../challenge-${String(challengeNumber + 1).padStart(2, "0")}/">
                                                        Continue to Challenge ${String(challengeNumber + 1).padStart(2, "0")}
                                                    </a>
                                                `
                                                : "<p>Congratulations. You have completed all challenges.</p>"
                                        }
                                    `
                                    : ""
                            }
                        `
                }
            </div>
        `;

        const passwordForm = document.getElementById("password-form");
        if (passwordForm) {
            passwordForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const submitted = document.getElementById("password-input").value.trim();
                if (submitted === challenge.password) {
                    passwordAccepted = true;
                    render();
                } else {
                    document.getElementById("password-message").textContent =
                        "Incorrect password. Try again.";
                }
            });
        }

        document.querySelectorAll(".nn-task-form").forEach((flagForm) => {
            flagForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const taskIndex = Number(flagForm.dataset.taskIndex);
                const task = challenge.tasks[taskIndex];
                const submitted = document.getElementById(`flag-input-${taskIndex}`).value.trim();
                if (submitted === task.flag) {
                    const savedFlags = new Set(progress[String(challengeNumber)] || []);
                    savedFlags.add(task.flag);
                    progress[String(challengeNumber)] = Array.from(savedFlags);
                    localStorage.setItem(progressKey, JSON.stringify(progress));
                    render();
                } else {
                    document.getElementById(`flag-message-${taskIndex}`).textContent =
                        "Incorrect flag. Try again.";
                }
            });
        });
    }

    render();
}
