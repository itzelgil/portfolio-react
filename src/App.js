import "./App.css";
import Button from "./Button";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About.js";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <section className="homepage-section">
        <Navbar />
        <div className="container-fluid main-page">
          <div className="row">
            <h1>("Hello, world!");</h1>
          </div>
          <div className="row">
            <p className="name-ocupation">I'm Itzel Gil 👋🏽</p>
          </div>
          <div className="row">
            <p className="name-ocupation">Front-end Developer</p>
          </div>
          <div className="row">
            <Button>
              <Link to="/About">About</Link>
              <Route exact path="/about" component={About} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
