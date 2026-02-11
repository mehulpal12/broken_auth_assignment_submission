# Broken Authentication Assignment – Submission

This repository contains the completed solution for the **Broken Authentication Assignment**.  
All identified issues in the authentication flow have been fixed, and the system now works end-to-end as expected.

---

## ✅ Authentication Flow Overview

After fixing the bugs, the following sequence runs successfully:

### 1. Login
- User logs in using an email address.
- A `loginSessionId` is generated.
- An OTP is generated and logged in the server console (for testing).

**Result:**
- `loginSessionId` returned in response
- OTP visible in server logs

---

### 2. Verify OTP
- The OTP is verified using the `loginSessionId`.
- The session is marked as verified.
- A session cookie is issued.

**Result:**
- `session_token` returned via `Set-Cookie` header

---

### 3. Get Token
- The verified session cookie is exchanged for a JWT.

**Result:**
- `access_token` (JWT) returned

---

### 4. Access Protected Route
- The protected route is accessed using the JWT in the `Authorization` header.
- The request is authorized successfully.

**Result:**
- `200 OK` response
- User details returned
- A unique `success_flag` generated based on the email used during login

---

## 📌 Important Notes

- You must use **your own email address** when testing the login flow.
- The `success_flag` is generated based on the email used.
- OTP is intentionally logged on the server for testing and debugging.

---

## 🧪 Testing & Output

All four steps were tested using terminal commands in the following order:

1. Login  
2. Verify OTP  
3. Get Token  
4. Access Protected Route  

The complete terminal output of all four commands is available in:

