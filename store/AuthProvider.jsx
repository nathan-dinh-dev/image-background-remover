import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [imageSelected, setImageSelected] = useState(null);

  const selectImageHander = (image) => {
    setImageSelected(image);
  };

  const authContext = {
    selectImage: selectImageHander,
    currentImage: imageSelected,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
