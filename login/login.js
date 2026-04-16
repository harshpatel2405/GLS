const app = document.getElementById("app");

// 🔹 Render Login UI
function renderLogin() {
  app.innerHTML = `
    <h2>Login</h2>
    <input type="email" id="email" placeholder="Enter email" />
    <input type="password" id="password" placeholder="Enter password" />
    <button onclick="handleLogin()">Login</button>
    <p id="status"></p>
  `;
}

// 🔹 Render Dashboard
function renderDashboard(user) {
  app.innerHTML = `
    <h2>Dashboard</h2>
    <p>Welcome ${user.name}</p>
    <p>Email: ${user.email}</p>
    <button onclick="logout()">Logout</button>
  `;
}

// 🔹 Fetch Users (Promise style inside async)
function fetchUsers() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

// 🔹 Handle Login
async function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const status = document.getElementById("status");

  try {
    status.innerText = "Loading...";

    const users = await fetchUsers();

    const user = users.find(u => u.email === email);

    if (user && password === "1234") {
      // ✅ Store session
      sessionStorage.setItem("user", JSON.stringify(user));

      // ✅ Store persistent
      localStorage.setItem("user", JSON.stringify(user));

      renderDashboard(user);
    } else {
      status.innerText = "Invalid credentials";
    }

  } catch (error) {
    status.innerText = "Error fetching data";
  }
}

// 🔹 Logout
function logout() {
  sessionStorage.clear();
  renderLogin();
}

// 🔹 Check Session on Load
function init() {
  const sessionUser = sessionStorage.getItem("user");

  if (sessionUser) {
    renderDashboard(JSON.parse(sessionUser));
  } else {
    renderLogin();
  }
}

init();