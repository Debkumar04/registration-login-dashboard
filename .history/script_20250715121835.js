function togglePassword(id) {
  const input = document.getElementById(id);
  if (input) {
    input.type = input.type === "password" ? "text" : "password";
  }
}

function toBase64(file, callback) {
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(file);
}

function is18OrOlder(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  return age > 18 || (age === 18 && m >= 0);
}

function isValidName(name) {
  return name.length >= 3 && !/\d/.test(name) && !/(.)\1\1/.test(name);
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;
  return regex.test(password);
}

function storeUser(user) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((u) => u.email === user.email)) {
    return alert("Email already registered!");
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please login.");
  window.location.href = "login.html";
}

function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}


document.addEventListener("DOMContentLoaded", () => {
  // REGISTER PAGE
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const phone = document.getElementById("phone").value.trim();
      const gender = document.querySelector(
        'input[name="gender"]:checked'
      )?.value;
      const dob = document.getElementById("dob").value;
      const address = document.getElementById("address").value.trim();
      const city = document.getElementById("city").value;
      const skills = Array.from(
        document.querySelectorAll('input[name="skills"]:checked')
      ).map((e) => e.value);
      const terms = document.getElementById("terms").checked;
      const profilePicFile = document.getElementById("profilePic").files[0];

      if (!isValidName(fullName)) return alert("Invalid Full Name");
      if (!isValidEmail(email)) return alert("Invalid Email");
      if (!isValidPassword(password))
        return alert(
          "Password must be 8+ chars, include upper, lower, number, symbol"
        );
      if (password !== confirmPassword) return alert("Passwords do not match");
      if (!/^\d{10}$/.test(phone)) return alert("Phone must be 10 digits");
      if (!gender) return alert("Please select gender");
      if (!is18OrOlder(dob)) return alert("You must be at least 18 years old");
      if (address.length < 10) return alert("Address too short");
      if (!city) return alert("Please select a city");
      if (skills.length < 1) return alert("Select at least one skill");
      if (!terms) return alert("Please accept the terms");

      const userData = {
        fullName,
        email,
        password,
        phone,
        gender,
        dob,
        address,
        city,
        skills,
        profilePic: "",
        registeredAt: new Date().toISOString(),
      };

      if (profilePicFile) {
        toBase64(profilePicFile, function (base64) {
          userData.profilePic = base64;
          storeUser(userData);
        });
      } else {
        storeUser(userData);
      }
    });
  }

  // LOGIN PAGE
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        document.getElementById("loginError").classList.remove("hidden");
        return;
      }

      sessionStorage.setItem("loggedInUser", email);
      window.location.href = "dashboard.html";
    });
  }

  // DASHBOARD PAGE
  if (window.location.pathname.includes("dashboard.html")) {
    const email = sessionStorage.getItem("loggedInUser");
    if (!email) {
      alert("Please login first");
      window.location.href = "login.html";
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);
    const content = document.getElementById("dashboardContent");

    if (user && content) {
      content.innerHTML = `
        <div class="flex gap-6 items-start">
          <img src="${
            user.profilePic || "https://via.placeholder.com/100"
          }" class="w-28 h-28 object-cover rounded-full border">
          <div>
            <p><strong>Full Name:</strong> ${user.fullName}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>DOB:</strong> ${user.dob}</p>
            <p><strong>City:</strong> ${user.city}</p>
            <p><strong>Address:</strong> ${user.address}</p>
            <p><strong>Skills:</strong> ${user.skills.join(", ")}</p>
          </div>
        </div>
      `;
    }
  }
});
