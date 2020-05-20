import React from 'react';
import './default.css';
import IntCalc from "./components/interest_calculator";
import IntCalc2 from "./components/interest_calculator2";
import IntCalc3 from "./components/interest_calculator3";
import Main from "./components/main";
import {Route,Switch} from "react-router-dom";

//<div className="left_ad">
//rhk
//</div>

function App() {
  return (
    <div className="app_wapper">
      <div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/loan" component={IntCalc2} />
            <Route path="/pay" component={IntCalc3} />
            <Route exact path="/saving" component={IntCalc} />
            <Route component={Main} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
