const tasks = [
    {
        title: "Initial Access",
        description: "Identify the compromised employee account.",
        flag: "FLAG{neha.gupta}"
    },
    {
        title: "Execution & Persistence",
        description: "Identify the malicious process.",
        flag: "FLAG{powershell.exe}"
    },
    {
        title: "Privilege Escalation",
        description: "Identify the compromised privileged account.",
        flag: "FLAG{rajesh.kumar}"
    },
    {
        title: "Lateral Movement",
        description: "Identify the compromised destination host.",
        flag: "FLAG{MN-DC01}"
    },
    {
        title: "Domain Compromise",
        description: "Identify the final domain compromise indicator.",
        flag: "FLAG{domain_admin}"
    }
];

const root = document.getElementById("nn-bank-portal");

let currentTask = Number(localStorage.getItem("nn_progress") || 0);

function render() {
    if (currentTask >= tasks.length) {
        root.innerHTML = `
            <h2>Exercise Completed!</h2>
            <p>Congratulations. You have completed all challenges.</p>
        `;
        return;
    }

    const task = tasks[currentTask];

    root.innerHTML = `
        <div class="nn-header">
            <h2>NULL NATIONAL BANK</h2>
            <p>Security Operations Centre</p>
        </div>

        <div class="nn-panel">
            <p>CHALLENGE ${currentTask + 1} / ${tasks.length}</p>

            <h2>${task.title}</h2>

            <p>${task.description}</p>

            <input id="flag-input"
                   placeholder="Enter your flag">

            <button id="submit-flag">Submit Flag</button>

            <p id="message"></p>
        </div>
    `;

    document.getElementById("submit-flag").onclick = () => {
        const submitted = document
            .getElementById("flag-input")
            .value.trim();

        if (submitted === task.flag) {
            currentTask++;

            localStorage.setItem("nn_progress", currentTask);

            render();
        } else {
            document.getElementById("message").textContent =
                "Incorrect flag. Try again.";
        }
    };
}

render();