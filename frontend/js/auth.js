const API_BASE = "http://localhost:3000/api/auth";

document.addEventListener("DOMContentLoaded", () => {
  // Register handler
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name")?.value.trim();
      const password = document.getElementById("password")?.value.trim();

      if (!name || !password) {
        alert("Please fill all fields.");
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, password }),
        });

        if (res.ok) {
          alert("Registration successful! You can now login.");
          window.location.href = "login.html";
        } else {
          alert("Registration failed.");
        }
      } catch (err) {
        alert("Error during registration.");
        console.error(err);
      }
    });
  }

  // Login handler
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name")?.value.trim();
      const password = document.getElementById("password")?.value.trim();

      if (!name || !password) {
        alert("Please fill all fields.");
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, password }),
        });

        const data = await res.json();
        if (res.ok && data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", name);
          window.location.href = "dashboard.html";
        } else {
          alert("Invalid credentials");
        }
      } catch (err) {
        alert("Error during login.");
        console.error(err);
      }
    });
  }
});
