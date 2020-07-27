import React, { useState, useEffect, useRef } from "react";

import { Swipeable, direction } from "react-deck-swiper";
import DeckCard from "./DeckCard";
import INITIAL_CARDS_STATE from "./data";
import CardButtons from "./CardButtons";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Button } from "react-bootstrap";
import "./deck.css";

const Deck = () => {
  const [lastSwipeDirection, setLastSwipeDirection] = useState(null);
  const { users } = useSelector((state) => state.firestore.data);
  useFirestoreConnect({
    collection: "users",
    storeAs: "users",
  });

  const userProfileImages = users
    ? Object.keys(users).map((userId, i) => {
        let { displayName, email, avatarUrl } = users[userId];
        return { id: i, title: displayName, text: email, url: avatarUrl };
      })
    : INITIAL_CARDS_STATE;

  const [cards, setCards] = useState(INITIAL_CARDS_STATE);

  useEffect(() => {
    setCards(userProfileImages);
  }, [users]);

  const handleOnSwipe = (swipeDirection) => {
    if (swipeDirection === direction.RIGHT) {
      // handle right swipe
      setLastSwipeDirection("right");
    }

    if (swipeDirection === direction.LEFT) {
      // handle left swipe
      setLastSwipeDirection("left");
    }

    setCards((prev) => prev.slice(1));
  };
  const renderButtons = ({ right, left }) => (
    <CardButtons right={right} left={left} />
  );
  const refreshProfiles = () => {
    setCards(userProfileImages);
    setLastSwipeDirection(null);
  };

  const [currentMousePosition, setCurrentMousePosition] = useState({
    x: 50,
    y: 50,
  });
  const [initialMousePos, setInitialMousePos] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    setCurrentMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  const [showIcon, toggleIcon] = useState(false);

  const handleTouchStart = (firstTouchEvent) => {
    const location = {
      x: firstTouchEvent.clientX,
      y: firstTouchEvent.clientY,
    };
    setCurrentMousePosition(location);
    toggleIcon(true);
  };
  const handleTouchEnd = (firstTouchEvent) => {
    const location = {
      x: firstTouchEvent.clientX,
      y: firstTouchEvent.clientY,
    };
    toggleIcon(true);

    setTimeout(() => {
      toggleIcon(false);
    }, 500);
    setCurrentMousePosition({ x: location.x, y: location.y });
  };

  useEffect(() => {
    setTimeout(() => {
      // setCurrentMousePosition({ x: initialMousePos.x, y: initialMousePos.y });
      toggleIcon(false);
    }, 500);
  }, [lastSwipeDirection]);

  return (
    <div>
      {cards.length > 0 ? (
        <>
          {showIcon && initialMousePos.x < currentMousePosition.x && (
            <div className="swipe-content swipe-like">Heart</div>
          )}{" "}
          {showIcon && initialMousePos.x > currentMousePosition.x && (
            <div className="swipe-content swipe-dislike">X</div>
          )}
          <div
            className=""
            onDragStart={() => setInitialMousePos(currentMousePosition)}
            onDragEnd={(e) => handleTouchEnd(currentMousePosition)}
            onTouchStart={(e) => handleTouchStart(e.touches[0])}
            onTouchMove={(e) => handleTouchStart(e.touches[0])}
            onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0])}
          >
            <Swipeable renderButtons={renderButtons} onSwipe={handleOnSwipe}>
              <DeckCard item={cards[0]} />
            </Swipeable>
          </div>
          <Button onClick={refreshProfiles}>Refresh</Button>
        </>
      ) : (
        <div variant="body1">
          Looks like you have reached the end here =)
          <Button onClick={refreshProfiles}>Refresh</Button>
        </div>
      )}
    </div>
  );
};

export default Deck;
