"use client";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Link from "next/link";
import { toast } from "react-hot-toast";
import CustomInputField from "./CustomInputField";
import { useRouter } from "next/navigation";
import SubmitButton from "./SubmitButton";
import { signIn } from "next-auth/react";
import FormMessage from "./FormMessage";
import { useCountLoading } from "../utils/hooks";
import { useState } from "react";
import { styles } from "../styles";

const LoginForm = () => {
  const router = useRouter();
  const [responseMsg, setResponseMsg] = useState({
    text: "",
    type: "error",
  });
  const { loading, setLoading, message } = useCountLoading({
    maxCount: 10,
    actionHandler: stopLoading,
    loadingMessage: "Wait...",
    stopLoadingMessage: "took too long! Try again",
  });

  function stopLoading() {
    setLoading(false);
  }

  return (
    <div
      className={`w-full md:w-3/4 mx-auto shadow-xl md:p-10 p-5 ${styles.gradientSlateCyan} relative`}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true);
          signIn("credentials", {
            ...values,
            redirect: false,
          })
            .then((callback) => {
              console.log(callback);
              if (callback.error) {
                toast.error(callback.error);
                if (callback.error.toLowerCase() === "email not verified") {
                  router.push("/auth/verificationCode/email");
                }
              }
              if (!callback.error && callback.ok) {
                toast.success("Logged in successfully");
                router.push("/");
              }
              setLoading(false);
            })
            .catch((error) => {
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
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Password required")
            .matches(/[a-z]+/, "Must contain atleast one lowercase character")
            // .matches(/[A-Z]+/, "One uppercase character")
            // .matches(/[@$!%*#?&]+/, "One special character")
            .matches(/\d+/, "Must contain atleast one number"),
        })}>
        <Form>
          <div className="flex flex-col items-center justify-center gap-2 md:gap-5 w-full">
            {responseMsg.text === "" ? (
              <h1>{message}</h1>
            ) : (
              <FormMessage message={responseMsg} />
            )}
            <CustomInputField
              name="email"
              label="Email"
              placeholder="Email"
              type="email"
            />

            <CustomInputField
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
            />

            <div className="flex flex-col gap-1 justify-center items-center w-full my-4">
              <div className="flex justify-between items-center text-blue-500 underline w-full">
                <Link href={"/auth/verificationCode/email"}>Verify email</Link>
                <Link href={"/auth/verificationCode/password"}>
                  forgot password
                </Link>
              </div>
              <SubmitButton isLoading={loading} />
            </div>
          </div>
        </Form>
      </Formik>
      {/* <SocialLoginButton
        text={"Continue with Google"}
        provider={"google"}
        socialIcon={googleIcon}
      /> */}
      <div className="flex justify-center items-center gap-1">
        <p>Have no account? </p>
        <Link href="/auth/signup" className="underline">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
