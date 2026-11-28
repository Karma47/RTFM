const root = document.getElementById("nn-bank-warmup");
const threatIntelPath = "/labs/null-national-bank/content/threat-intel/challenge-00.html";

if (root) {
    const tasks = [
        {
            prompt: "Which employee account was targeted?",
            answer: "rajesh.kumar"
        },
        {
            prompt: "What source IP address appears in the failed and successful logons?",
            answer: "203.0.113.42"
        },
        {
            prompt: "Which threat actor is linked to that address in the intelligence note?",
            answer: "apt-dinesh"
        }
    ];
    const progressKey = "nn_warmup_task_completion_v1";
    let activeTab = "threat-intel";
    let walkthroughUnlocked = false;
    let threatIntelLoading = false;
    let threatIntelMarkup = "";
    let threatIntelError = "";
    let completedTasks;

    try {
        const savedTasks = JSON.parse(localStorage.getItem(progressKey) || "[]");
        if (
            !Array.isArray(savedTasks) ||
            savedTasks.some(
                (taskIndex) =>
                    !Number.isInteger(taskIndex) ||
                    taskIndex < 0 ||
                    taskIndex >= tasks.length
            )
        ) {
            throw new Error("Warm-up progress has an invalid format.");
        }
        completedTasks = new Set(savedTasks);
    } catch (error) {
        console.error("Warm-up progress could not be loaded.", error);
        root.textContent = "Warm-up progress could not be loaded. Clear this site's saved data or contact your instructor.";
    }

    if (completedTasks) {
        async function loadThreatIntel() {
            threatIntelLoading = true;
            threatIntelError = "";
            render();
            try {
                const response = await fetch(threatIntelPath, { cache: "no-cache" });
                if (!response.ok) {
                    throw new Error(`Threat Intel failed to load (HTTP ${response.status}).`);
                }

                threatIntelMarkup = await response.text();
                if (!threatIntelMarkup.trim()) {
                    throw new Error("Threat Intel is empty.");
                }
            } catch (error) {
                console.error("Warm-up Threat Intel could not be loaded.", error);
                threatIntelError = "Threat Intel could not be loaded. Check the Markdown file or retry.";
            }
            threatIntelLoading = false;
            render();
        }

        function render() {
            const isComplete = completedTasks.size === tasks.length;
            const passwordPrompt = `
                <p>Enter the demo completion password shown on the Hunt Challenge tab.</p>
                <form class="nn-password-form" id="warmup-password-form">
                    <label for="warmup-password">WARM-UP PASSWORD</label>
                    <input id="warmup-password" type="password" autocomplete="off" required>
                    <button type="submit">Unlock</button>
                    <p class="nn-message" id="warmup-password-message" aria-live="polite"></p>
                </form>
            `;
            const challengeContent = `
                <p><strong>Scenario:</strong> The SOC is reviewing suspicious remote logons to a bank employee account.</p>
                <h3>Evidence</h3>
                <p>Authentication events show repeated failures for <code>rajesh.kumar</code> from <code>203.0.113.42</code>, followed by a successful RDP logon from that address. A threat-intelligence note links the address to Dinesh.</p>
                <p class="nn-progress" role="status">${completedTasks.size} / ${tasks.length} flags submitted</p>
                <div class="nn-task-list">
                    ${tasks.map((task, index) => {
                        const complete = completedTasks.has(index);
                        return `
                            <section class="nn-task" data-complete="${complete}">
                                <h3>Task ${index + 1}</h3>
                                <p>${task.prompt}</p>
                                ${
                                    complete
                                        ? '<p class="nn-message" role="status">Flag validated.</p>'
                                        : `
                                            <form class="nn-task-form" data-task-index="${index}">
                                                <label for="warmup-flag-${index}">FLAG</label>
                                                <input id="warmup-flag-${index}" type="text" autocomplete="off" spellcheck="false" required>
                                                <button type="submit">Submit Flag</button>
                                                <p class="nn-message" id="warmup-message-${index}" aria-live="polite"></p>
                                            </form>
                                        `
                                }
                            </section>
                        `;
                    }).join("")}
                </div>
                ${
                    isComplete
                        ? `
                            <p class="nn-message" role="status">Warm-up complete. You have validated all three flags.</p>
                            <div class="nn-next-password">
                                <p>Demo completion password: <strong>NULL-WARMUP-01</strong></p>
                                <p>This practice password only unlocks the walkthrough; it is not the Challenge 01 password.</p>
                            </div>
                            <a class="nn-button" href="../challenge-01/">Continue to Challenge 01</a>
                        `
                        : ""
                }
            `;
            const walkthroughContent = walkthroughUnlocked
                ? `
                    <h3>Investigation walkthrough</h3>
                    <ol>
                        <li>The account named in the authentication events is <code>rajesh.kumar</code>.</li>
                        <li>The failed attempts and the later success share source <code>203.0.113.42</code>.</li>
                        <li>The intelligence note links that source to Dinesh, making Dinesh the suspected threat actor.</li>
                    </ol>
                    <p>The failures followed by a success are consistent with password guessing. Treat the actor attribution as an intelligence lead and corroborate it with the event evidence.</p>
                    <a class="nn-button" href="../challenge-01/">Start Challenge 01</a>
                `
                : isComplete
                    ? passwordPrompt
                    : "<p>Submit all three flags on the Hunt Challenge tab to reveal the demo password and unlock this walkthrough.</p>";
            const threatIntelContent = threatIntelLoading
                ? '<p role="status">Loading Threat Intel...</p>'
                : threatIntelError
                    ? `
                        <p class="nn-message" role="alert">${threatIntelError}</p>
                        <button class="nn-button" id="warmup-retry-threat-intel" type="button">Retry</button>
                    `
                    : `<section class="nn-static-content">${threatIntelMarkup}</section>`;

            root.innerHTML = `
                <div class="nn-header">
                    <h2>NULL NATIONAL BANK</h2>
                    <p>Five-minute platform warm-up</p>
                </div>
                <div class="nn-panel">
                    <p class="nn-eyebrow">PRACTICE EXERCISE</p>
                    <h2>Authentication Triage</h2>
                    <div class="nn-tabs" role="tablist" aria-label="Warm-up sections">
                        <button class="nn-tab" type="button" role="tab" aria-selected="${activeTab === "threat-intel"}" data-warmup-tab="threat-intel">Threat Intel</button>
                        <button class="nn-tab" type="button" role="tab" aria-selected="${activeTab === "challenge"}" data-warmup-tab="challenge">Hunt Challenge</button>
                        <button class="nn-tab" type="button" role="tab" aria-selected="${activeTab === "walkthrough"}" data-warmup-tab="walkthrough">Walkthrough</button>
                    </div>
                    <section class="nn-tab-panel" role="tabpanel">
                        ${
                            activeTab === "challenge"
                                ? challengeContent
                                : activeTab === "threat-intel"
                                    ? threatIntelContent
                                    : walkthroughContent
                        }
                    </section>
                    <p><a href="../">Back to the lab overview</a></p>
                </div>
            `;

            root.querySelectorAll("[data-warmup-tab]").forEach((tab) => {
                tab.addEventListener("click", () => {
                    activeTab = tab.dataset.warmupTab;
                    if (
                        activeTab === "threat-intel" &&
                        !threatIntelLoading &&
                        !threatIntelMarkup &&
                        !threatIntelError
                    ) {
                        loadThreatIntel();
                    } else {
                        render();
                    }
                });
            });

            root.querySelector("#warmup-retry-threat-intel")?.addEventListener("click", loadThreatIntel);

            root.querySelectorAll(".nn-task-form").forEach((form) => {
                form.addEventListener("submit", (event) => {
                    event.preventDefault();
                    const taskIndex = Number(form.dataset.taskIndex);
                    const submitted = form.querySelector("input").value.trim().toLowerCase();
                    if (submitted === tasks[taskIndex].answer) {
                        completedTasks.add(taskIndex);
                        localStorage.setItem(progressKey, JSON.stringify([...completedTasks]));
                        render();
                    } else {
                        root.querySelector(`#warmup-message-${taskIndex}`).textContent =
                            "Incorrect flag. Review the evidence and try again.";
                    }
                });
            });

            root.querySelector("#warmup-password-form")?.addEventListener("submit", (event) => {
                event.preventDefault();
                const submitted = root.querySelector("#warmup-password").value.trim();
                const message = root.querySelector("#warmup-password-message");
                if (submitted === "NULL-WARMUP-01") {
                    walkthroughUnlocked = true;
                    if (activeTab === "threat-intel") {
                        loadThreatIntel();
                    } else {
                        render();
                    }
                } else {
                    message.textContent = "Incorrect password. Try again.";
                }
            });
        }

        loadThreatIntel();
    }
}
