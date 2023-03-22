import { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({ total: null, next: null, operation: null });
  const handleButtonClick = (buttonName) => {
    setResult(calculate(result, buttonName));
  };

  return (
    <div className="calc-container">
      <div className="calc-output">{result.next || result.total || '0'}</div>
      <div className="calc-keys">
        <div className="first-row">
          <input type="button" name="" value="AC" className="btn" onClick={() => handleButtonClick('AC')} />
          <input type="button" name="" value="+/-" className="btn" onClick={() => handleButtonClick('+/-')} />
          <input type="button" name="" value="%" className="btn" onClick={() => handleButtonClick('%')} />
          <input type="button" name="" value="÷" className="btn color" onClick={() => handleButtonClick('÷')} />
        </div>
        <div className="second-row">
          <input type="button" name="" value="7" className="btn" onClick={() => handleButtonClick('7')} />
          <input type="button" name="" value="8" className="btn" onClick={() => handleButtonClick('8')} />
          <input type="button" name="" value="9" className="btn" onClick={() => handleButtonClick('9')} />
          <input type="button" name="" value="x" className="btn color" onClick={() => handleButtonClick('x')} />
        </div>
        <div className="third-row">
          <input type="button" name="" value="4" className="btn" onClick={() => handleButtonClick('4')} />
          <input type="button" name="" value="5" className="btn" onClick={() => handleButtonClick('5')} />
          <input type="button" name="" value="6" className="btn" onClick={() => handleButtonClick('6')} />
          <input type="button" name="" value="-" className="btn color" onClick={() => handleButtonClick('-')} />
        </div>
        <div className="fourth-row">
          <input type="button" name="" value="1" className="btn" onClick={() => handleButtonClick('1')} />
          <input type="button" name="" value="2" className="btn" onClick={() => handleButtonClick('2')} />
          <input type="button" name="" value="3" className="btn" onClick={() => handleButtonClick('3')} />
          <input type="button" name="" value="+" className="btn color" onClick={() => handleButtonClick('+')} />
        </div>
        <div className="fifth-row">
          <input type="button" name="" value="0" className="zeroBtn" onClick={() => handleButtonClick('0')} />
          <input type="button" name="" value="." className="btn" onClick={() => handleButtonClick('.')} />
          <input type="button" name="" value="=" className="btn color" onClick={() => handleButtonClick('=')} />
        </div>

      </div>
    </div>
  );
};

export default Calculator;
