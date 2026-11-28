# Execution & Persistence

## Situation
The initial access investigation is complete. Investigators are now examining endpoint activity.

## Investigation objective
Find the process associated with the attacker's execution and persistence activity.

## Evidence
Review Windows and Sysmon telemetry in the instructor-provided Splunk environment.

## Image
![Null National Bank network diagram](/labs/null-national-bank/images/01_phase.svg)

## Walkthrough
/labs/null-national-bank/content/walkthroughs/phase-02.html

## Tasks
1. Identify the process associated with the attacker's execution.
2. Which PowerShell option is commonly used to execute a Base64-encoded command?
3. Identify the Windows script host used to execute a VBScript file.
4. Identify the command-line utility used to create a scheduled task.
5. Which registry key is commonly used for per-user startup persistence?
6. What Windows event ID records process creation?
7. What Windows event ID records a new service installation?
8. Identify the encoding format often used to obscure PowerShell commands.
9. Which Sysmon event ID records process creation?
10. What persistence mechanism is created by a task configured to run on a schedule?
