# Lateral Movement

## Situation
The investigation is following activity from the compromised privileged account to other systems.

## Investigation objective
Identify the destination host involved in the lateral movement.

## Evidence
Correlate endpoint and authentication events in the instructor-provided Splunk environment.

## Image
![Null National Bank network diagram](/labs/null-national-bank/images/03_phase.svg)

## Walkthrough
/labs/null-national-bank/content/walkthroughs/phase-04.html

## Tasks
1. Identify the destination host involved in lateral movement.
2. Which TCP port is commonly used by SMB for file sharing?
3. Identify the Windows utility commonly associated with remote service execution.
4. What Windows event ID records a successful logon?
5. What logon type is commonly associated with network logons?
6. Which hidden administrative share exposes the Windows directory over SMB?
7. Identify the source workstation from which lateral movement began.
8. Which Windows management technology can be used to execute commands remotely?
9. Which protocol is commonly used by PsExec to communicate with a remote Windows host?
10. Identify the authentication protocol commonly seen with Windows network logons.
