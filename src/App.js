import React from 'react';
import './default.css';
import IntCalc from "./componnents/interest_calculator"

function App() {
  return (
    <div className="app_wapper">
      <div>
        <div className="left_ad">
          광고
        </div>
        <div className="content">
          <IntCalc />
        </div>
      </div>
    </div>
  );
}

export default App;
