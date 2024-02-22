import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import SignIn from "../components/Auth/signIn";

function SignInPage() {
  return (
    <>
      <div className="h-screen flex flex-col">
      <div className="h-10">
        <Header />
      </div>
      <div className="h-80">
        <SignIn/>
      </div>
      <div className="h-10">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default SignInPage;
