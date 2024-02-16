"use client";
import Heading from "../../_components/Heading";
import React from "react";
import SignupForm from "../../_components/SignupForm";
import { Brand } from "../../_components/Brand";
import { AuthHeader } from "../../_components/AuthHeader";
import { useSession } from "next-auth/react";

const SignupPage = () => {
  const { session } = useSession();
  return (
    <div className="container p-0">
      <div className="auth-page grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        <div className="w-full m-auto p-2 block pb-10  bg-opacity-50">
          <AuthHeader authTitle={"Signup"} />
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
