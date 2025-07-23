// frontend/js/api.js

const API = "http://localhost:3000/api";

function getToken() {
  return localStorage.getItem("token");
}

async function apiGet(endpoint) {
  const res = await fetch(`${API}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return res.json();
}

async function apiPost(endpoint, data) {
  const res = await fetch(`${API}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

async function apiPatch(endpoint, data) {
  const res = await fetch(`${API}${endpoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
