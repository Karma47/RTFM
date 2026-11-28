# Privilege Escalation

## Situation
Endpoint activity has been identified, and the investigation is tracing suspicious privilege use.

## Investigation objective
Determine which privileged account was compromised.

## Evidence
Review authentication and Windows security events in the instructor-provided Splunk environment.

## Image
![Null National Bank network diagram](/labs/null-national-bank/images/02_phase.svg)

## Walkthrough
/labs/null-national-bank/content/walkthroughs/phase-03.html

## Tasks
1. Identify the compromised privileged account.
2. What Windows event ID records special privileges assigned to a new logon?
3. Identify the privileged Active Directory group targeted in the escalation.
4. Which privilege allows a process to debug and adjust the memory of other processes?
5. Identify the built-in Windows utility that can run a program as another user.
6. Which local group grants administrative rights on a Windows computer?
7. What Windows event ID records a successful logon?
8. What Windows event ID records a user account being added to a security-enabled group?
9. What access-control technique abuses elevated rights to gain higher privileges?
10. What is the status of an account after it has obtained elevated permissions?
