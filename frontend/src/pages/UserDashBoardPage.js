import React from "react";
import SignedInHeader from "../components/shared/SignedInHeader";
import Footer from "../components/shared/Footer";
import UserDashBoard from "../components/shared/UserDashBoard";

function UserDashBoardPage() {
  return (
    <>
      <SignedInHeader />
      <UserDashBoard />
      <Footer />
    </>
  );
}

export default UserDashBoardPage;