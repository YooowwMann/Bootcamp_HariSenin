import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import bg from "../assets/bg-Login.jpg";

export default function Login() {
  return (
    <AuthLayout bgImage={bg}>
      <LoginForm />
    </AuthLayout>
  );
}
