import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import SignIn from "../components/Auth/signIn";
import SignUp from "../components/Auth/signUp";

function SignInPage() {
  return (
    <>
      <Header />
      <SignUp />
      <Footer />
    </>
  );
}

export default SignInPage;
