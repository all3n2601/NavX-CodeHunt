import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import MatchUsers from "../components/core/matchUsers";

function MatchUsersPage() {
  return (
    <>
    <div className="h-screen flex flex-col">
    <div className="h-10">
      <Header />
    </div>
    <div className="h-80">
      <MatchUsers/>
    </div>
    <div className="h-10">
      <Footer />
    </div>
  </div>
  </>
  );
}

export default MatchUsersPage;
