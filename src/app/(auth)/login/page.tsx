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
          expires: 1,
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
    }
  };

  return (
    <div className="flex items-center justify-center font-playfair py-20 bg-white px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Left Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/login/chef.jpg"
            alt="Login"
            width={500}
            height={500}
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        {/* Right Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm">
            <h1 className="text-2xl font-semibold font-playfair text-center mb-6 text-main">
             Login To Book Halwai
            </h1>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, values, touched, errors }) => (
                <Form noValidate>
                  <div className="mb-4">
                    <label className="block text-black font-roboto-slab font-bold text-xl mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className={`w-full px-3 py-2 border ${
                        touched.email && errors.email
                          ? "border-main"
                          : "border-black"
                      } rounded-md focus:outline-none  text-black focus:ring-2 focus:ring-main`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-black font-roboto-slab font-bold text-xl mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      placeholder="Enter Password"
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${
                        touched.password && errors.password
                          ? "border-main"
                          : "border-black"
                      } rounded-md focus:outline-none text-black focus:ring-2 focus:ring-main`}
                    />
                    {touched.password && errors.password && (
                      <p className="text-sm text-main mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-main text-white py-2 rounded-md transition duration-200"
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>

            <div className="mt-4 text-center">
              <p className=" text-black font-bold font-roboto-slab text-md">
                Not registered yet?{" "}
                <Link
                  href="/register"
                  className="text-main font-semibold hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
