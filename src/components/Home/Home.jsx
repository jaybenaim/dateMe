import React from "react";
import Deck from "../Profiles/Deck/Deck";

const Home = () => {
  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <div className="animated-deck">
            <Deck />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
