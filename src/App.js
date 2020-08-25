import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Step1 } from "./Auth/Step1";
import { SignUp } from "./Auth/SignUp";
import { Step2 } from "./Auth/Step2";
import { Step3 } from "./Auth/Step3";
import { Result } from "./Auth/Result";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/register" component={Step1} />
          <Route path="/register2" component={SignUp} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
