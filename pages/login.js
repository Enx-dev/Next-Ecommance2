import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function submitHandler(email, password) {
    console.log(email, password);
  }
  return (
    <Layout title="Login">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="mx-auto max-w-screen-md">
        <h1 className="mb-4 text-xs">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: { message: "Enter your email", value: true },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9].[a-zA-Z0-9-.]+$/i,
                message: "Enter Vaild Email",
              },
            })}
            type="email"
            id="email"
            className="w-full"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: { message: "Enter your password", value: true },
            })}
            type="password"
            id="password"
            className="w-full"
            autoFocus
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link href="register">Register</Link>
        </div>
      </form>
    </Layout>
  );
}
