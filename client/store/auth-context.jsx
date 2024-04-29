import React from "react";

const AuthContext = React.createContext({
  selectImage: () => {},
  currentImage: null,
});

export default AuthContext;
