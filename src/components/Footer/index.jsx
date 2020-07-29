import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>react_starter_template</h5>
            <p className={styles.description}>
              This is placeholder text. Your web app description goes here.
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  Example Link
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  <div>
                    Icons made by{" "}
                    <a
                      href="https://www.flaticon.com/authors/freepik"
                      title="Freepik"
                    >
                      Freepik
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
