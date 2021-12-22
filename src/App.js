
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "./components/pages/Home";
import About from "./components/pages/About";
import Help from './components/pages/Help';
import  ContactUS  from "./components/pages/ContactUs";
import Assistance from "./components/pages/Assistance";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route path="/contactus" component={ContactUS} />
            <Route path="/assistance" component={Assistance} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
