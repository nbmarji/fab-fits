
import Homepage from "./pages/home.js"
import Contact from "./pages/contact.js"
import LooksMainPage from "./pages/looksMainPage.js"
import LookPage from "./pages/lookpage.js"
import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
       <Route exact path="/" component={Homepage} />
       <Route exact path = "/contact" component={Contact}/>
       <Route exact path ="/looks" component= {LooksMainPage}/>
       <Route exact path="/look/:lookId" component={LookPage} />
      </Router>
    );
  }
}

export default App;