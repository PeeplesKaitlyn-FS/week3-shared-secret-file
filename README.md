# Week 3 – Shared Secret File (Still Insecure)

This project demonstrates the **second** method of handling secrets: storing them in a separate file (such as `secrets.json`) that is **committed to the repository**.

Although it organizes secrets in one place, it is still insecure because the secrets file is publicly available in Git.

## Overview

This repo includes a file:

secrets.json

css
Copy code

containing values like:

```json
{
  "dbPassword": "mySuperSharedPassword!",
  "apiToken": "SHARED-TOKEN-12345"
}
In app.js, the application loads the secrets using:

javascript
Copy code
const secrets = require("./secrets.json");
Why This Is Still Insecure
The secrets.json file is tracked by Git.

Anyone who downloads or clones this repository can see the credentials.

GitHub may warn about exposed secrets.

If this file were pushed to a public repo, secrets could leak instantly.

How to Run
bash
Copy code
node app.js
Then visit:

cpp
Copy code
http://127.0.0.1:3001/
You will see values from secrets.json displayed in the output.

Security Reflection
This method keeps secrets out of the main code file but still exposes them through Git. It is more organized than hard-coded secrets but still violates best practices such as:

Secret isolation

Centralized control

Restricted access

Proper auditing

This method remains insecure and is included for comparison.