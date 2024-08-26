import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './display';  
import Buttons from './buttons';  
import { useState } from "react";

function App() {
  const [calVal, setVal] = useState('');

  function onButtonClick(btnName) {
    if (btnName === '=') {
      try {
        const result = eval(calVal);
        setVal(result.toString());
      } catch (error) {
        setVal("Error");
      }
    } else if (btnName === 'C') {
      setVal('');
    } else {
      setVal(prevVal => prevVal + btnName);
    }
  }

  return (
    <div className="calculator-container d-flex justify-content-center align-items-center">
      <div className="calculator bg-light p-3 rounded shadow">
        <Display val={calVal} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;

