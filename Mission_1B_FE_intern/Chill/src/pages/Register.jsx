import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";
import bg from "../assets/images/bg-register.jpg";

export default function Register() {
  return (
    <AuthLayout bgImage={bg}>
      <RegisterForm />
    </AuthLayout>
  );
}
