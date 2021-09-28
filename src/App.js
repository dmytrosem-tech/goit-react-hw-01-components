import "./App.css";
import { Gallery } from "./components/Gallery/Gallery";

const galleryImages = {
  title: "images",
  description: "Best images",
  images: ["lol", "lol"],
};

const {title, description, images} = galleryImages

function App() {
  return (
    <div className="App">
      lol
      <Gallery
        t={title}
        d={description}
        i={images}
      />
    </div>
  );
}

export default App;
