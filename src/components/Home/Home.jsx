import React from "react";
import TopProfiles from "../TopProfiles/TopProfiles";

const Home = () => {
  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <h3>Home</h3>
        </div>
        <TopProfiles />
      </div>
    </main>
  );
};
export default Home;
