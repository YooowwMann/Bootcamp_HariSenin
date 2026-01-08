//src/utils/auth.js
// simple fake auth: register menyimpan user object di localStorage
export function registerUser({ username, email, password }) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(u => u.username === username || u.email === email)) {
    return { ok: false, message: "Username atau email sudah dipakai" };
  }
  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  return { ok: true };
}

export function loginUser({ usernameOrEmail, password }) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const found = users.find(
    u =>
      (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
      u.password === password
  );

  if (!found) {
    return { ok: false, message: "Username/email atau password salah" };
  }

  // ✅ SATU SESSION YANG KONSISTEN
  localStorage.setItem(
    "session",
    JSON.stringify({
      isLogin: true,
      username: found.username,
      email: found.email,
    })
  );

  return { ok: true, user: found };
}

export function getSession() {
  return JSON.parse(localStorage.getItem("session") || "null");
}

export function logout() {
  localStorage.removeItem("session");
}
