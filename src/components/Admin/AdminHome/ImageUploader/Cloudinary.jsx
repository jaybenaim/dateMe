import React, { Component } from "react";
import { render } from "react-dom";
import { cloudinaryConfig } from "../../../../config/cloudinary";

class Cloudinary extends Component {
  uploadWidget() {
    // eslint-disable-next-line
    cloudinary.openUploadWidget(
      {
        cloud_name: cloudinaryConfig.cloudName,
        upload_preset: cloudinaryConfig.uploadPreset,
        tags: ["dating"],
      },
      function (error, result) {
        console.log(result);
      }
    );
  }
  render() {
    return (
      <div className="main">
        <h1>Galleria</h1>
        <div className="upload">
          <button
            onClick={this.uploadWidget.bind(this)}
            className="upload-button"
          >
            Add Image
          </button>
        </div>
      </div>
    );
  }
}

export default Cloudinary;
