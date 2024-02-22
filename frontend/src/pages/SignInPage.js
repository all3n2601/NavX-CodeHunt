import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import SignIn from "../components/Auth/signIn";

function SignInPage() {
  return (
    <>
      <Header />
      <SignIn/>
      <Footer />
    </>
  );
}

export default SignInPage;
