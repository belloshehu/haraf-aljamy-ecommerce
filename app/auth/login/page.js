"use client";
import Heading from "../../_components/Heading";
import React from "react";
import LoginForm from "../../_components/LoginForm";
import { Brand } from "../../_components/Brand";
import { AuthHeader } from "../../_components/AuthHeader";

const LoginPage = () => {
  return (
    <div className="container p-0">
      <div className="auth-page grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        <div className="w-full m-auto p-2 block pb-10 bg-opacity-50">
          <AuthHeader authTitle={"Login"} />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
