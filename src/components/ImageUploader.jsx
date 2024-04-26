import { useState } from "react";
import styles from "./ImageUploader.module.css";

const ImageUploader = () => {
  const [imageUploaded, setImageUploaded] = useState(null);
  const [fileName, setfileName] = useState("");

  const imageSelectHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event);
      setImageUploaded(event.target.files[0]);
      setfileName(event.target.files.name);
    } else {
      alert("File Error");
    }
  };

  return (
    <>
      <h1>Upload and Display Original Image</h1>
      {imageUploaded ? (
        <div>
          <img src={URL.createObjectURL(imageUploaded)} alt="no image found" />
          <button
            onClick={() => {
              setImageUploaded(null);
              setfileName("");
            }}
          >
            Remove
          </button>
        </div>
      ) : (
        ""
      )}
      <input
        type="file"
        name="selectedImage"
        multiple
        accept="image/*"
        onChange={imageSelectHandler}
        value={fileName}
      />
    </>
  );
};

export default ImageUploader;
