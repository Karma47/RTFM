# Domain Compromise

## Situation
The SOC is assessing the final impact of the threat across the bank's domain.

## Investigation objective
Identify the indicator that confirms the domain compromise.

## Evidence
Review the related Windows and domain activity in the instructor-provided Splunk environment.

## Image
![Null National Bank network diagram](/labs/null-national-bank/images/04_phase.svg)

## Walkthrough
/labs/null-national-bank/content/walkthroughs/phase-05.html

## Tasks
1. Identify the account privilege that confirms domain compromise.
2. Which Active Directory database file contains domain account data?
3. What replication technique can be abused to retrieve password hashes from a domain controller?
4. Which Windows process commonly holds credentials in memory?
5. Identify the credential-dumping tool commonly associated with LSASS access.
6. Which built-in domain account is used by Kerberos to encrypt ticket-granting tickets?
7. Which Active Directory group has the highest level of domain-wide administrative privileges?
8. What Windows event ID records a new user account being created?
9. What Kerberos ticket type is commonly requested during Kerberoasting?
10. What forged Kerberos ticket can grant an attacker broad domain access?
