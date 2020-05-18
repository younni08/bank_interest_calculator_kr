import React from 'react';
import './default.css';
import IntCalc from "./componnents/interest_calculator"
import IntCalc2 from "./componnents/interest_calculator2"
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
            <Route exact path="/" component={IntCalc} />
            <Route path="/loan" component={IntCalc2} />
            <Route component={IntCalc} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
