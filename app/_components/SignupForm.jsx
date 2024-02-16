"use client";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Link from "next/link";
import { styles } from "../styles";
import { toast } from "react-hot-toast";
import axios from "axios";
import CustomInputField from "./CustomInputField";
import { useRouter } from "next/navigation";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import FormError from "./FormMessage";
import { useCountLoading } from "../utils/hooks";

const SignupForm = () => {
  const [responseMsg, setResponseMsg] = useState({
    text: "",
    type: "error",
  });

  const stopLoading = () => {
    setLoading(false);
  };

  const router = useRouter();
  const { loading, setLoading, message } = useCountLoading({
    maxCount: 10,
    actionHandler: stopLoading,
    loadingMessage: "Wait...",
    stopLoadingMessage: "took too long! Try again",
  });

  return (
    <div
      className={`w-full md:w-3/4 mx-auto shadow-xl md:p-10 p-5 ${styles.gradientSlateCyan} relative`}>
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          firstName: "",
          lastName: "",
          //   terms: "",
          // phoneNumber: "",
          password: "",
          passwordRepeat: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true);
          axios
            .post("/api/signup", values)
            .then((res) => {
              toast.success("Signed up successfully");
              setLoading(false);
              console.log(res);
              router.push("/auth/login");
            })
            .catch((error) => {
              console.log(error);
              toast.error(
                error.response.data.message || "Something went wrong"
              );
              setResponseMsg({
                text: error.response.data.message || "Something went wrong",
                type: "error",
              });
            })
            .finally(() => {
              setLoading(false);
            });
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "Must be atlest 2 characters")
            .required("First name is required"),
          lastName: Yup.string()
            .min(2, "Must be atlest 2 characters")
            .required("Other name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          // phoneNumber: Yup.string().required("Phone number is required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Password required")
            .matches(/[a-z]+/, "Must contain atleast one lowercase character")
            // .matches(/[A-Z]+/, "One uppercase character")
            // .matches(/[@$!%*#?&]+/, "One special character")
            .matches(/\d+/, "Must contain atleast one number"),
          passwordRepeat: Yup.string()
            .required("Confirm password required")
            .oneOf([Yup.ref("password")], "Passwords must match"),
          //   terms: Yup.string().required("You must accept the terms to proceed"),
        })}>
        <Form>
          <div className="flex flex-col items-center justify-center gap-2 md:gap-5 w-full">
            {responseMsg.text === "" ? (
              <h1>{message}</h1>
            ) : (
              <FormError message={responseMsg} />
            )}

            <div className="flex flex-col lg:flex-row gap-4 md:gap-3 w-full mb-2">
              <CustomInputField
                name="firstName"
                label="First name"
                placeholder="First name"
                type="text"
              />
              <CustomInputField
                name="lastName"
                label="Last name"
                placeholder="Last name"
                type="text"
              />
            </div>

            <CustomInputField
              name="email"
              label="Email"
              placeholder="Email"
              type="email"
            />

            <div className="flex flex-col lg:flex-row gap-4 md:gap-3 w-full mt-2">
              <CustomInputField
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
              />
              <CustomInputField
                name="passwordRepeat"
                label="Password repeat"
                placeholder="Password repeat"
                type="password"
              />
            </div>

            <SubmitButton isLoading={loading} />
          </div>
        </Form>
      </Formik>

      <div className="flex justify-center items-center gap-1">
        <p>Have an account? </p>
        <Link href="/auth/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
