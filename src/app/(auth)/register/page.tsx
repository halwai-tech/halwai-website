"use client";

import React from "react";
import Cookies from "js-cookie";
import NextLink from "next/link";
import Image from "next/image";
import { Formik, Form } from "formik";
import { RegisterSchema } from "@/utils/validationSchema";
import { useRouter } from "next/navigation";
import { authController } from "@/api/authController";
import { IRegisterUser } from "@/utils/typeDef";
import { useDispatch } from "react-redux";
import { showToast } from "@/redux/slices/toastSlice";

export default function Register() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (values: IRegisterUser) => {
    try {
      const response = await authController.registerUser(values);
      const token = response.data.token;

      if (token) {
        Cookies.set("auth_token", token, {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Lax",
          path: "/",
        });

        dispatch(
          showToast({
            message: "User Registration Successful!",
            type: "success",
          })
        );

        router.push("/");
      }
    } catch (error: any) {
      console.error("Registration error:", error.message);
      dispatch(
        showToast({ message: "Error in Registering the User!", type: "error" })
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-playfair">

      {/* Left Image */}
<div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-10">
  <Image
    src="/images/login/chef.jpg"
    alt="Register"
    width={600}
    height={600}
    className="rounded-3xl shadow-xl object-cover w-full max-w-sm sm:max-w-md"
  />
</div>


      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl">

          {/* Heading */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#b11f29] leading-snug sm:leading-snug md:leading-tight">
              Create Your Account
            </h1>
            <p className="text-gray-600 mt-2 font-roboto-slab text-sm sm:text-base md:text-base leading-relaxed">
              Register now and enjoy premium Halwai services & authentic sweets.
            </p>
          </div>

          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              role: "admin",
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, values, touched, errors }) => (
              <Form className="space-y-4 sm:space-y-5">

                {/* Username */}
                <div>
                  <label className="block text-gray-800 font-semibold mb-1 sm:mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Enter Username"
                    className={`w-full px-4 py-3 border rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b11f29] transition ${
                      touched.username && errors.username ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {touched.username && errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                  )}
                </div>

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
                  Register
                </button>
              </Form>
            )}
          </Formik>

          {/* Login link */}
          <div className="mt-5 flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base">
            <NextLink
              href="/login"
              className="text-[#b11f29] font-semibold hover:underline mb-2 sm:mb-0 text-center sm:text-left"
            >
              Already have an account? Login here
            </NextLink>
            <NextLink
              href="/forgot-password"
              className="text-gray-500 hover:text-[#b11f29] transition-colors mt-1 sm:mt-0 text-center sm:text-left"
            >
              Forgot Password?
            </NextLink>
          </div>

        </div>
      </div>
    </div>
  );
}
