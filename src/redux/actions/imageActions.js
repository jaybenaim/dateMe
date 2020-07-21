import { GET_IMAGES, SET_IMAGES, GET_ERRORS } from "./types";
import { storage } from "../../config/firebase";
import cloudinary from "cloudinary";

// export const getImages = (uid) => (dispatch) => {
//   const listRef = storage.ref().child(`users/${uid}`);
//   let urls = [];
//   listRef.listAll().then((res) => {
//     res.items.forEach((itemRef) => {
//       console.log(itemRef.getMetadata());
//       itemRef

//         .getDownloadURL()
//         .then((url) => {
//           urls.push(url);
//         })
//         .then((data) => {
//           dispatch(setImages(urls));
//         })
//         .catch((err) =>
//           dispatch({
//             type: GET_ERRORS,
//             payload: err,
//           })
//         );
//     });
//   });
// };
export const getImages = (uid) => (dispatch) => {};
export const setImages = (data) => {
  return {
    type: SET_IMAGES,
    payload: data,
  };
};
