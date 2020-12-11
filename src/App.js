import logo from './logo.svg';
import Display from "./components/Display/Display";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/NavBar/navbar";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar/content";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
   

      <Router>
        <Navbar />
        <Switch>
        <Route path={['/', '/home']} exact component={Home} />
        </Switch>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
