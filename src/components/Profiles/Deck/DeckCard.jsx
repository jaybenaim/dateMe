import React from "react";
import { Card } from "react-bootstrap";

const DeckCard = ({
  item: { title, text, url = "https://via.placeholder.com/150" },
}) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DeckCard;
