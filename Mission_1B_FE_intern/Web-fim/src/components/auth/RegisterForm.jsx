import React, { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import { registerUser } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (!username || !email || !password || !confirm) return setError("Isi semua kolom");
    if (password !== confirm) return setError("Password tidak cocok");
    if (!agree) return setError("Setujui syarat & ketentuan");
    const res = registerUser({ username, email, password });
    if (!res.ok) return setError(res.message);
    // sukses -> redirect ke login
    navigate("/auth/login");
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Daftar</h1>
        <p className="text-sm text-gray-400">Buat akun baru</p>
      </div>

      {error && <div className="text-sm text-red-400">{error}</div>}

      <Input label="Username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Pilih username" />
      <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@domain.com" />
      <Input label="Kata Sandi" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Minimal 6 karakter" />
      <Input label="Konfirmasi Kata Sandi" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Ketik ulang kata sandi" />

      <Checkbox label="Saya menyetujui Syarat & Ketentuan" checked={agree} onChange={e => setAgree(e.target.checked)} />

      <Button type="submit">Daftar</Button>

      <div className="flex gap-2 justify-center text-sm text-gray-400">
        <span>Sudah punya akun?</span>
        <a className="text-blue-400 hover:underline" href="/auth/login">Masuk</a>
      </div>
    </form>
  );
}