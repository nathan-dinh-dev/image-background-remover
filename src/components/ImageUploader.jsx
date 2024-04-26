import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context.jsx";
import styles from "./ImageUploader.module.css";

const ImageUploader = (props) => {
  const [fileName, setfileName] = useState("");

  const ctx = useContext(AuthContext);

  const imageSelectHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event);
      ctx.selectImage(event.target.files[0]);
      setfileName(event.target.files.name);
    } else {
      alert("File Error");
    }
  };

  return (
    <>
      <h1>Upload and Display Original Image</h1>
      {ctx.currentImage ? (
        <div>
          <img
            src={URL.createObjectURL(ctx.currentImage)}
            alt="no image found"
          />
          <button
            onClick={() => {
              ctx.selectImage(null);
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
