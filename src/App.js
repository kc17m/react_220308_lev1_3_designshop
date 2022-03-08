import Header from "./components/Header"
import GallerySection from "./components/GallerySection";
import GallerySection2 from "./components/GallerySection2";
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <GallerySection />
        <GallerySection2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
