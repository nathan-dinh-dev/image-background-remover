import { removeBackground } from "@imgly/background-removal-node";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";

const ImageResult = () => {
  const [imageResult, setImageResult] = useState(null);
  const ctx = useContext(AuthContext);

  const removeBackgroundHandler = async () => {
    if (ctx.currentImage) {
      let image_src = URL.createObjectURL(ctx.currentImage);

      const blob = await removeBackground(image_src);
      const url = URL.createObjectURL(blob);
      console.log(url);
      setImageResult(url);
    }
  };

  return (
    <>
      {imageResult && <img src={imageResult} alt="" />}
      <button onClick={removeBackgroundHandler}></button>
    </>
  );
};

export default ImageResult;
