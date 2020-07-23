import React from "react";
import { Button } from "react-bootstrap";
import { cloudinaryConfig } from "../../config/cloudinary";

const ImageUploader = ({ handleClick, styleClass, btnText }) => {
  const uploadWidget = () => {
    // eslint-disable-next-line
    cloudinary.openUploadWidget(
      {
        cloud_name: cloudinaryConfig.cloudName,
        upload_preset: cloudinaryConfig.uploadPreset,
        tags: ["dating"],
      },
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          handleClick(result[0].secure_url);
        }
      }
    );
  };
  return (
    <div className="main">
      <div className="upload">
        <Button onClick={uploadWidget.bind(this)} className={styleClass}>
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default ImageUploader;
