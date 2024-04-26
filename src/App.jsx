import { useState } from "react";
import ImageUploader from "./components/ImageUploader.jsx";
import "./App.css";
import AuthProvider from "../store/AuthProvider.jsx";
// import ImageResult from "./components/ImageResult.jsx";

function App() {
  return (
    <AuthProvider>
      <ImageUploader />
      {/* <ImageResult /> */}
    </AuthProvider>
  );
}

export default App;
