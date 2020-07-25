import React, { useState } from "react";

import { Swipeable, direction } from "react-deck-swiper";
import DeckCard from "./DeckCard";
import INITIAL_CARDS_STATE from "./data";
import CardButtons from "./CardButtons";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useEffect } from "react";

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
      setLastSwipeDirection("your right");
    }

    if (swipeDirection === direction.LEFT) {
      // handle left swipe
      setLastSwipeDirection("your left");
    }
    setCards((prev) => prev.slice(1));
  };
  const renderButtons = ({ right, left }) => (
    <CardButtons right={right} left={left} />
  );
  return (
    <div>
      {lastSwipeDirection ? (
        <div> Swiped {lastSwipeDirection} </div>
      ) : (
        <div> Try using the buttons below </div>
      )}
      {cards.length > 0 ? (
        <Swipeable renderButtons={renderButtons} onSwipe={handleOnSwipe}>
          <DeckCard item={cards[0]} />
        </Swipeable>
      ) : (
        <div variant="body1">Looks like you have reached the end here =)</div>
      )}
    </div>
  );
};

export default Deck;
