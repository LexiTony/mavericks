import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Arsenal from "./pages/Arsenal";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ammunition from "./pages/Ammunition";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/arsenal" exact component={Arsenal} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/ammo" exact component={Ammunition} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;