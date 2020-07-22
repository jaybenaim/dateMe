import React, { useState, useEffect, useReducer } from "react";
import { useSelector, connect } from "react-redux";
import { Button } from "react-bootstrap";
import { storage } from "../../../../config/firebase";
import { getImages } from "../../../../redux/actions/imageActions";

import { cloudinaryConfig } from "../../../../config/cloudinary";
import axios from "axios";
import Cloudinary from "./Cloudinary";

const FirebaseImageUpload = (props) => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const [imageAsFile, setImageAsFile] = useState("");
  const imageUrls = useSelector((state) => state.profileImages.imageUrls);

  useEffect(() => {
    props.getImages(uid);
  }, []);

  const onChange = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  // const uploadWidget = () => {
  //   cloudinary.openUploadWidget(
  //     {
  //       cloud_name: cloudinaryConfig.cloud_name,
  //       upload_preset: "signed",
  //       tags: ["profileImages"],
  //     },
  //     (error, result) => {
  //       console.log(result);
  //     }
  //   );
  // };
  const addImage = (e) => {
    e.preventDefault();
    // axios
    //   .post(
    //     `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`,
    //     { imageAsFile },
    //     { upload_preset: "unsigned" }
    //   )
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  };
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
      }
    );
  };

  const imageElements = () => {
    return (
      imageUrls &&
      imageUrls.length >= 1 &&
      imageUrls.map((url, i) => {
        console.log("rendering images");

        console.log(url);
        return (
          <img
            key={i}
            src={url}
            alt={"insert alt"}
            height="40px"
            width="30px"
          />
        );
      })
    );
  };

  return (
    <div>
      <Cloudinary />
      <div className="">{imageElements()}</div>

      <form>
        <input type="file" onChange={onChange} />
      </form>
      <Button
        variant="outline-secondary"
        onClick={addImage.bind(this)}
        className="upload-button"
      >
        Add an Image
      </Button>
    </div>
  );
};

export default connect((state) => state, { getImages })(FirebaseImageUpload);
