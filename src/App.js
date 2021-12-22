
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "./components/pages/Home";
import About from "./components/pages/Hosp";
import Help from './components/pages/Treatment';
import  ContactUS  from "./components/pages/ContactUs";
import Assistance from "./components/pages/Assistance";
import Whyus from "./components/pages/Whyus";
import './App.css';
import Hosp from "./components/pages/Hosp";
import Treatment from "./components/pages/Treatment";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/whyus" component={Whyus} />
            <Route path="/hospital" component={Hosp} />
            <Route path="/treatment" component={Treatment} />
            <Route path="/contactus" component={ContactUS} />
            <Route path="/assistance" component={Assistance} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
