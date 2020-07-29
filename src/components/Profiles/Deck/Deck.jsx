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
  const [showIcon, setShowIcon] = useState(lastSwipeDirection);

  const handleAfterSwipe = () => {
    if (lastSwipeDirection === "right") {
      setShowIcon("right");
    }
    if (lastSwipeDirection === "left") {
      setShowIcon("left");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      lastSwipeDirection && setLastSwipeDirection(null);
    }, 500);
  }, [lastSwipeDirection]);

  return (
    <div>
      {lastSwipeDirection === "right" && <div>like</div>}
      {lastSwipeDirection === "left" && <div>dislike</div>}

      {cards.length > 0 ? (
        <>
          <div className="swipe-deck">
            <Swipeable
              renderButtons={renderButtons}
              onSwipe={handleOnSwipe}
              onAfterSwipe={handleAfterSwipe}
              swipeThreshold={200}
              fadeThreshold={60}
            >
              <DeckCard item={cards[0]} />
            </Swipeable>
          </div>
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
