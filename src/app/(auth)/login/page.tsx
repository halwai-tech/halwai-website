"use client";

import React from "react";
import Cookies from "js-cookie";
import { authController } from "@/api/authController";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import { LoginSchema } from "@/utils/validationSchema";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { showToast } from "@/redux/slices/toastSlice";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await authController.loginUser(values);
      const token = response.data.token;

      if (token) {
        Cookies.set("auth_token", token, {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Lax",
          path: "/",
        });

        dispatch(
          showToast({ message: "Logged In Successfully!", type: "success" })
        );
        router.push("/");
      } else {
        dispatch(
          showToast({ message: "Error in Logging In!", type: "error" })
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch(
        showToast({ message: "Login failed! Try again.", type: "error" })
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-playfair">

      {/* Left Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <Image
          src="/images/login/chef.jpg"
          alt="Login"
          width={600}
          height={600}
          className="rounded-3xl shadow-lg object-cover w-full max-w-md"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-0 sm:p-6 sm:p-8 md:p-10">
        <div className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl">
          
          {/* Heading */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#b11f29]">
              Welcome Back!
            </h1>
            <p className="text-gray-600 mt-2 font-roboto-slab text-sm sm:text-base">
              Login to explore our premium catering services & authentic sweets.
            </p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, values, touched, errors }) => (
              <Form className="space-y-4 sm:space-y-5">

                {/* Email */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className={`w-full px-4 py-3 border rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b11f29] transition ${
                      touched.email && errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-1 sm:mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className={`w-full px-4 py-3 border rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b11f29] transition ${
                      touched.password && errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {touched.password && errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#b11f29] text-white py-3 rounded-xl font-semibold hover:bg-[#e63946] transition duration-200 shadow-md hover:shadow-lg"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>

          {/* Links */}
          <div className="mt-5 flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base">
            <Link
              href="/register"
              className="text-[#b11f29] font-semibold hover:underline mb-2 sm:mb-0"
            >
              Create an account
            </Link>
            <Link
              href="/forgot-password"
              className="text-gray-500 hover:text-[#b11f29] transition-colors"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
