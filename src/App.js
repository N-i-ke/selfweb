import './App.css';
import Header from './components/Header';
import Video from "./components/Video";
import HomePage from "./components/HomePage";
import Footer from './components/Footer';
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <HomePage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
