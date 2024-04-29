import ImageUploader from "./components/ImageUploader.jsx";
import "./App.css";
import AuthProvider from "../store/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <ImageUploader />
    </AuthProvider>
  );
}

export default App;
