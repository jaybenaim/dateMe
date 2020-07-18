import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { storage } from "../../../../config/firebase";
const FirebaseImageUpload = () => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const [imageAsFile, setImageAsFile] = useState("");
  const allInputs = { imgUrl: "" };
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const onChange = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const [imageUrls, setImageUrls] = useState([]);
  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // image loading
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    const uploadTask = storage
      .ref(`/users/${uid}/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref(`users/${uid}`)
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
          })
          .catch((err) => console.log(err));
      }
    );
  };
  const getImages = () => {
    const listRef = storage.ref().child(`users/${uid}`);
    let urls = [];

    listRef
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          itemRef
            .getDownloadURL()
            .then((url) => {
              urls.push(url);
            })
            .catch((err) => console.log(err));
        });
      })
      .then((data) => {
        setImageUrls(urls);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getImages();
  }, []);

  const imageElements = () =>
    imageUrls.map((url, i) => {
      console.log(url);
      return (
        <img key={i} src={url} alt={"insert alt"} height="40px" width="30px" />
      );
    });

  return (
    <div>
      <form>
        <input type="file" onChange={onChange} />
        <div>Preview</div>
        <img src={imageAsUrl} alt="" />
        <Button variant="outline-secondary" onClick={handleFireBaseUpload}>
          Add an Image
        </Button>
      </form>
      {imageElements()}
    </div>
  );
};

export default FirebaseImageUpload;
