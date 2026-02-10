"use client";

import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    const credErrors = {
      email: email.trim() === "",
      password: password.trim() === "",
    };
    setErrors(credErrors);
    if (!errors.email && !errors.password) {
      console.log("login attempted", { email, password });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
        Teacher Portal
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors((prev) => ({ ...prev, email: false }));
              }
            }}
            placeholder="Enter your email"
            isEmpty={errors.email}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                setErrors((prev) => ({ ...prev, password: false }));
              }
            }}
            placeholder="Enter your password"
            isEmpty={errors.password}
          />
          <Button type="submit">Login</Button>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Forgot password?{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
            >
              Click here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
