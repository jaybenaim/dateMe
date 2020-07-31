import React from "react";
import styles from "./navbar.module.css";
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "../../assets/stylesheets/navbar.css";

const NavBar = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => !state.firebase.auth.isEmpty);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("signed out");
        history.push("/sign-in");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom">
        <Link className="navbar-brand" to="/">
          Date Me
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/home">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/admin" className="nav-item nav-link ">
                Account
              </Link>

              <Button
                className="nav-item nav-link "
                variant={"none"}
                onClick={() => signOut()}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link to="/sign-in">Sign In</Link>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
