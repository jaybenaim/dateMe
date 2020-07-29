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
          style={{ margin: "0 auto", minWidth: "100%" }}
        ></Notifications>
      )}
      <div className="swipe-card-buttons">
        <Button
          onClick={left}
          variant="outline-danger"
          className="dislike-btn "
        >
          <i class="fa fa-thumbs-down"></i>
        </Button>
        <Button onClick={right} variant="outline-success" className="like-btn">
          <i class="fa fa-thumbs-up"></i>
        </Button>
      </div>
    </div>
  );
};

export default CardButtons;
