import React from "react";
import { Card } from "react-bootstrap";

const DeckCard = ({
  item: { title, text, url = "https://via.placeholder.com/150" },
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={url} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DeckCard;
