import React from "react";
import { Button } from "react-bootstrap";
import Notifications from "../../Notifications/Notifications";

const CardButtons = ({ right, left }) => {
  return (
    <div>
      {window.innerWidth >= 480 && (
        <Notifications
          type="toast"
          heading="Having trouble?"
          small="Try our mobile version to get the full experience"
          body="Please use the buttons below."
        ></Notifications>
      )}
      <div className="swipe-card-buttons">
        <Button onClick={left} className="dislike-btn ">
          {" "}
          Dislike{" "}
        </Button>
        <Button onClick={right} className="like-btn">
          {" "}
          Like{" "}
        </Button>
      </div>
    </div>
  );
};

export default CardButtons;
