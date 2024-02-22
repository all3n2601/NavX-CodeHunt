import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import SignUp from "../components/Auth/signUp";

function SignInPage() {
  return (
    <>
    <div className="h-screen flex flex-col">
    <div className="h-10">
      <Header />
    </div>
    <div className="h-80">
      <SignUp/>
    </div>
    <div className="h-10">
      <Footer />
    </div>
  </div>
  </>
  );
}

export default SignInPage;
