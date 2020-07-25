import React from "react";
import { Button } from "react-bootstrap";

const CardButtons = ({ right, left }) => {
  return (
    <>
      <Button onClick={left}> Dislike </Button>
      <Button onClick={right}> Like </Button>
    </>
  );
};

export default CardButtons;
