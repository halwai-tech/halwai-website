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
            message: "User Registration Successfull!",
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
    <div className="bg-white flex font-playfair flex-col md:flex-row h-screen">
      {/* Left side image */}
      <div className="w-full md:w-1/2 flex items-center justify-end p-6">
        <Image
          src="/images/login/chef.jpg"
          alt="Register"
          width={500}
          height={500}
          className="max-w-full h-auto rounded-lg"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 flex items-center justify-start px-4">
        <div className="w-full max-w-md">
          <h1 className="text-2xl text-primary font-semibold text-center mb-6">
            Register Here
          </h1>

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
              <Form noValidate>
                {/* Username */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      touched.username && errors.username
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {touched.username && errors.username && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      touched.password && errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {touched.password && errors.password && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md transition duration-200"
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>

          {/* Login link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already registered?{" "}
              <NextLink
                href="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login here
              </NextLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
