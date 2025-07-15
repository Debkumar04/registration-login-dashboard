# 💻 Registration Login Dashboard

A mini front-end web application built using **HTML**, **Tailwind CSS (CDN)**, and **JavaScript** to demonstrate form handling, validation, authentication logic, and dashboard functionality — all using only the browser with no backend.

---

## 📌 Features

- ✅ User Registration with multiple form fields
- ✅ Client-side validations with Regex
- ✅ Login with localStorage-based authentication
- ✅ Dashboard that displays stored user details
- ✅ Show/Hide password toggle with eye icon
- ✅ Profile picture upload (stored as base64 in localStorage)
- ✅ Logout functionality that clears session
- ✅ Basic session control: restrict dashboard access if not logged in
- ✅ Animations for validation and error feedback using Tailwind classes

---

## 🛠 Technologies Used

- **HTML5** – semantic structure and forms  
- **Tailwind CSS (via CDN)** – for responsive, utility-first UI  
- **JavaScript (ES6)** – DOM manipulation, validation, authentication  
- **localStorage** – data persistence for user registration/login  
- **Git & GitHub** – version control and repository hosting  
- **GitHub Pages** – live deployment

---

## 🧪 Form Fields and Validations

| Field Name         | Validations                                                                 |
|--------------------|------------------------------------------------------------------------------|
| **Full Name**       | Required, min 3 characters, no digits, no same character repeated 3+ times |
| **Email**           | Required, must follow email format                                          |
| **Password**        | Required, min 8 chars, includes uppercase, lowercase, number, special char |
| **Confirm Password**| Must match Password                                                         |
| **Phone Number**    | Required, exactly 10 digits                                                 |
| **Gender**          | Required (radio)                                                            |
| **Date of Birth**   | Required, user must be 18+                                                  |
| **Address**         | Required, minimum 10 characters                                             |
| **City**            | Required (dropdown)                                                         |
| **Skills Known**    | At least one checkbox must be selected (HTML, CSS, JS, etc.)               |
| **Accept Terms**    | Checkbox must be checked                                                    |

---

## 🧾 Pages Overview

### 🔐 `register.html`
- Registration form with all required fields
- Profile image upload and preview
- Live validation and error messages
- Data saved in localStorage

### 🔑 `login.html`
- Login with email and password
- Validates credentials from localStorage
- Redirects to dashboard on success

### 🧑‍💼 `dashboard.html`
- Displays user data (name, email, etc.) and uploaded profile picture
- Includes Logout button (clears session and redirects to login)

---

## 📂 Project Structure

registration-login-dashboard/
│
├── register.html # User registration form
├── login.html # Login form
├── dashboard.html # User dashboard (data fetched from localStorage)
├── script.js # JS logic for validation, storage, login, logout
├── README.md # Project overview and instructions




---

## 🚀 How to Run the Project

1. Visit the live hosted site:  
   👉 [https://debkumar04.github.io/registration-login-dashboard/register.html](https://debkumar04.github.io/registration-login-dashboard/register.html)

2. Register with all required fields  
3. Log in using your email and password  
4. View the dashboard with your information  
5. Click Logout to end the session

---

## 🔗 Important Links

- **GitHub Repository**:  
  [https://github.com/Debkumar04/registration-login-dashboard](https://github.com/Debkumar04/registration-login-dashboard)

- **Live Project (GitHub Pages)**:  
  [https://debkumar04.github.io/registration-login-dashboard/register.html](https://debkumar04.github.io/registration-login-dashboard/register.html)

---

## 🙌 Credits

**Debkumar04**  
Built as part of **MERN Stack Internship – Week 1 Task**  
Hosted using GitHub Pages  
Tailwind CSS used via CDN for rapid UI styling

---

## 💡 What I Learned

- Semantic HTML and Form Elements  
- Tailwind CSS for responsive and clean UI  
- Regex and JavaScript validation  
- Use of localStorage for user data  
- Basic authentication flow  
- Deploying websites using GitHub Pages  
- Git and GitHub workflows

---
