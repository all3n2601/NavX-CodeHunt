import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Contact from "../components/shared/contact";

function ContactUsPage() {
  return (
    <>
    <div className="h-screen flex flex-col">
    <div className="h-10">
      <Header />
    </div>
    <div className="h-80">
      <Contact/>
    </div>
    <div className="h-10">
      <Footer />
    </div>
  </div>
  </>
  );
}

export default ContactUsPage;
