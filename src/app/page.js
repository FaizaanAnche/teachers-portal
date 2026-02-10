"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: email.trim() === "",
      password: password.trim() === "",
    };

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log("Login attempted", { email, password });
      router.push("/Dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-4">
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
        Teacher Portal
      </h1>

      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
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
                setErrors({ ...errors, email: false });
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
                setErrors({ ...errors, password: false });
              }
            }}
            placeholder="Enter your password"
            isEmpty={errors.password}
          />

          <Button
            type="submit"
            variant="primary"
            fullWidth
          >
            Login
          </Button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Forgot password?{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Click here
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}
