import React, { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import { loginUser } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
  e.preventDefault();
  setError("");

  const res = loginUser({ usernameOrEmail: identity, password });

  if (!res.ok) {
    setError(res.message);
    return;
  }

  // remember me
  if (remember) {
    localStorage.setItem("remembered", identity);
  } else {
    localStorage.removeItem("remembered");
  }

  // ✅ NAVIGATE KE ROUTE BARU
  navigate("/app", { replace: true });
};

  React.useEffect(() => {
    const rem = localStorage.getItem("remembered");
    if (rem) setIdentity(rem);
  }, []);

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Masuk</h1>
        <p className="text-sm text-gray-400">Selamat datang kembali</p>
      </div>

      {error && <div className="text-sm text-red-400">{error}</div>}

      <Input label="Username atau Email" value={identity} onChange={e => setIdentity(e.target.value)} placeholder="Masukkan username atau email" />
      <Input label="Kata Sandi" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Masukkan kata sandi" />

      <div className="flex items-center justify-between">
        <Checkbox label="Ingat saya" checked={remember} onChange={e => setRemember(e.target.checked)} />
        <a className="text-sm text-blue-400 hover:underline" href="#">Lupa kata sandi?</a>
      </div>

      <Button type="submit">Masuk</Button>

      <div className="flex gap-2 justify-center text-sm text-gray-400">
        <span>Belum punya akun?</span>
        <a className="text-blue-400 hover:underline" href="/auth/register">Daftar</a>
      </div>
    </form>
  );
}
