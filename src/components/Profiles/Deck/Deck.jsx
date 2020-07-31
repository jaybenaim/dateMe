import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { firebase } from "../../../config/firebase";

import { Swipeable, direction } from "react-deck-swiper";

import { Button } from "react-bootstrap";

import DeckCard from "./DeckCard";

import INITIAL_CARDS_STATE from "./data";
import CardButtons from "./CardButtons";

import brokenHeartIcon from "../../../assets/icons/broken-heart.png";
import "../../../assets/stylesheets/deck.css";

const Deck = () => {
  const [lastSwipeDirection, setLastSwipeDirection] = useState(null);
  const { users } = useSelector((state) => state.firestore.data);
  const {
    profile,
    auth: { uid, displayName, email },
  } = useSelector((state) => state.firebase);
  const [cards, setCards] = useState(INITIAL_CARDS_STATE);

  const databaseRef = firebase.database().ref();
  const chatRequestRef =
    uid &&
    cards.length >= 1 &&
    databaseRef.child("chats").child(cards[0].id).child("chatRequests");

  useFirestoreConnect({
    collection: "users",
    storeAs: "users",
  });

  const userProfileImages = users
    ? Object.keys(users).map((userId, i) => {
        let { displayName, email, avatarUrl } = users[userId];
        return { id: userId, title: displayName, text: email, url: avatarUrl };
      })
    : INITIAL_CARDS_STATE;

  useEffect(() => {
    setCards(userProfileImages);
    // eslint-disable-next-line
  }, [users]);

  const sendChatRequest = (card) => {
    const timestamp = new Date();
    const { title, text, url, id: receivingUserId } = card;

    return chatRequestRef.push({
      chatRequested: true,
      previewText: `${
        displayName || email
      } has requested to chat with you. Reply to start a chat.`,
      receivingUser: {
        id: receivingUserId,
        name: title || text,
        avatar: url || "placeholder-image",
      },
      sendingUser: {
        id: uid,
        name: displayName,
        avatar: profile.avatarUrl ? profile.avatarUrl : "placeholder-image",
      },
      timestamp: timestamp.toDateString(),
    });
  };
  const handleOnSwipe = (swipeDirection) => {
    if (swipeDirection === direction.RIGHT) {
      // handle right swipe
      setLastSwipeDirection("right");

      // save liked profile here to list of liked
      // or notify user (add notifications)
      sendChatRequest(cards[0]);
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

  useEffect(() => {
    setTimeout(() => {
      lastSwipeDirection && setLastSwipeDirection(null);
    }, 200);
  }, [lastSwipeDirection]);

  return (
    <div>
      {lastSwipeDirection === "right" && (
        <i className="fa fa-heart swipe-icon" />
      )}
      {lastSwipeDirection === "left" && (
        <img src={brokenHeartIcon} alt="broken heart" className="swipe-icon" />
      )}

      {cards.length > 0 ? (
        <>
          <div className="swipe-deck">
            <Swipeable
              renderButtons={renderButtons}
              onSwipe={handleOnSwipe}
              swipeThreshold={200}
              fadeThreshold={60}
            >
              <DeckCard item={cards[0]} />
            </Swipeable>
          </div>
        </>
      ) : (
        <div variant="body1">
          No more matches at this time.
          <Button onClick={refreshProfiles}>Refresh</Button>
        </div>
      )}
    </div>
  );
};

export default Deck;
