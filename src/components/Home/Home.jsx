import React from "react";
import TopProfiles from "../Profiles/TopProfiles/TopProfiles";
import Deck from "../Profiles/Deck/Deck";

const Home = () => {
  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <h3>Home</h3>
        </div>
        <div className="animated-deck">
          <Deck />
        </div>
      </div>
    </main>
  );
};
export default Home;
