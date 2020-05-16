import React from 'react';
import './default.css';
import IntCalc from "./componnents/interest_calculator"

//<div className="left_ad">
//rhk
//</div>

function App() {
  return (
    <div className="app_wapper">
      <div>
        <div className="content">
          <IntCalc />
        </div>
      </div>
    </div>
  );
}

export default App;
