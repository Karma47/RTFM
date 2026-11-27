---
title: SQL Injection
date: 2026-11-26
authors:
  - Prasanna
tags:
  - cybersecurity
  - web-security
  - sql-injection
  - pentesting
---

{{< meta >}}

A curated collection of resources to learn and practice SQL Injection, covering fundamentals, advanced exploitation techniques, cheat sheets, hands-on labs, and real-world bug bounty writeups.

## 1. Introduction to SQL Injection

Start with the fundamentals of SQL Injection and understand how vulnerabilities occur in web applications.

| Resource | Description |
|---|---|
| [What is SQL Injection? - PortSwigger](https://portswigger.net/web-security/sql-injection) | Introduction to SQL Injection, attack techniques, and vulnerabilities. |
| [Advanced SQL Injection - YouTube](https://www.youtube.com/watch?v=rdyQoUNeXSg&t=204s) | Advanced SQL Injection presentation by Joseph McCray (DEFCON 17). |

## 2. SQL Injection Cheat Sheets

Useful references for understanding SQL syntax, database-specific payloads, and different SQL Injection techniques.

| # | Resource | Description |
|---|---|---|
| 1 | [PortSwigger SQL Injection Cheat Sheet](https://portswigger.net/web-security/sql-injection/cheat-sheet) | Database-specific SQL Injection syntax and techniques. |
| 2 | [Advanced SQL Injection Cheatsheet](https://github.com/kleiton0x00/Advanced-SQL-Injection-Cheatsheet) | Advanced SQL Injection techniques and payload references. |
| 3 | [PayloadsAllTheThings - SQL Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection) | Collection of SQL Injection payloads and exploitation techniques. |
| 4 | [HackTricks - SQL Injection](https://hacktricks.wiki/pentesting-web/sql-injection/) | Practical SQL Injection methodology and exploitation references. |

## 3. Hands-on SQL Injection Labs

Practice SQL Injection techniques in intentionally vulnerable environments.

### 3.1 TryHackMe

| # | Lab | Description |
|---|---|---|
| 1 | [SQL Injection Lab](https://tryhackme.com/room/sqlilab) | Hands-on SQL Injection practice. |
| 2 | [SQL Injection](https://tryhackme.com/room/sqlinjectionlm) | Practical SQL Injection exercises. |

### 3.2 PortSwigger Web Security Academy

#### Basic SQL Injection

| # | Lab | Description |
|---|---|---|
| 1 | [SQL Injection - Retrieve Hidden Data](https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data) | Retrieve hidden records by exploiting SQL Injection. |
| 2 | [SQL Injection - Login Bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass) | Bypass authentication using SQL Injection. |

#### UNION-Based SQL Injection

| # | Lab | Description |
|---|---|---|
| 3 | [Determine the Number of Columns](https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns) | Determine the number of columns returned by the original query. |
| 4 | [Find a Column Containing Text](https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text) | Identify a column compatible with string data. |
| 5 | [Retrieve Data from Other Tables](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables) | Retrieve data from other database tables. |
| 6 | [Retrieve Multiple Values in a Single Column](https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column) | Combine multiple values into a single returned column. |

#### Examining the Database

| # | Lab | Description |
|---|---|---|
| 7 | [Querying Database Version - Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-oracle) | Retrieve database version information from Oracle. |
| 8 | [Querying Database Version - MySQL and Microsoft](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-querying-database-version-mysql-microsoft) | Retrieve database version information from MySQL and Microsoft SQL Server. |
| 9 | [Listing Database Contents - Non-Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-non-oracle) | Enumerate tables and columns in non-Oracle databases. |
| 10 | [Listing Database Contents - Oracle](https://portswigger.net/web-security/sql-injection/examining-the-database/lab-listing-database-contents-oracle) | Enumerate tables and columns in Oracle databases. |

#### Blind SQL Injection

| # | Lab | Description |
|---|---|---|
| 11 | [Conditional Responses](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-responses) | Identify blind SQL Injection using conditional responses. |
| 12 | [Conditional Errors](https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors) | Extract information using conditional database errors. |
| 13 | [Time Delays](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays) | Detect blind SQL Injection using time delays. |
| 14 | [Time Delays and Information Retrieval](https://portswigger.net/web-security/sql-injection/blind/lab-time-delays-info-retrieval) | Retrieve information using time-based SQL Injection. |
| 15 | [Out-of-Band Interaction](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band) | Detect SQL Injection through out-of-band interactions. |
| 16 | [Out-of-Band Data Exfiltration](https://portswigger.net/web-security/sql-injection/blind/lab-out-of-band-data-exfiltration) | Extract data using out-of-band SQL Injection techniques. |

## 4. SQLMap

Learn automated SQL Injection detection and exploitation using SQLMap.

| Resource | Description |
|---|---|
| [SQLMap - TryHackMe](https://tryhackme.com/room/sqlmap) | Hands-on introduction to SQLMap and automated SQL Injection testing. |

## 5. Bug Bounty Writeups

Explore real-world SQL Injection vulnerabilities and understand how researchers discover, exploit, and report them.

| Resource | Description |
|---|---|
| [Patched Zoom Exploit - Altering Camera Settings via Remote SQL Injection](https://medium.com/@keegan.ryan/patched-zoom-exploit-altering-camera-settings-via-remote-sql-injection-4fdf3de8a0d) | A real-world security research writeup involving remote SQL Injection in Zoom. |

---

## Recommended Learning Path

Follow this sequence to build your SQL Injection knowledge progressively.

1. Understand SQL Injection fundamentals.
2. Study SQL Injection syntax and cheat sheets.
3. Practice basic SQL Injection labs.
4. Learn UNION-based SQL Injection.
5. Explore database enumeration techniques.
6. Practice blind SQL Injection.
7. Learn automated testing using SQLMap.
8. Study real-world bug bounty writeups.

---