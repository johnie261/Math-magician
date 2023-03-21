const Calculator = () => (
  <div className="calc-container">
    <div className="calc-output">0</div>
    <div className="calc-keys">
      <div className="first-row">
        <input type="button" name="" value="AC" className="btn" />
        <input type="button" name="" value="+/-" className="btn" />
        <input type="button" name="" value="%" className="btn" />
        <input type="button" name="" value="÷" className="btn color" />
      </div>
      <div className="second-row">
        <input type="button" name="" value="7" className="btn" />
        <input type="button" name="" value="8" className="btn" />
        <input type="button" name="" value="9" className="btn" />
        <input type="button" name="" value="x" className="btn color" />
      </div>
      <div className="third-row">
        <input type="button" name="" value="4" className="btn" />
        <input type="button" name="" value="5" className="btn" />
        <input type="button" name="" value="6" className="btn" />
        <input type="button" name="" value="-" className="btn color" />
      </div>
      <div className="fourth-row">
        <input type="button" name="" value="1" className="btn" />
        <input type="button" name="" value="2" className="btn" />
        <input type="button" name="" value="3" className="btn" />
        <input type="button" name="" value="+" className="btn color" />
      </div>
      <div className="fifth-row">
        <input type="button" name="" value="0" className="zeroBtn" />
        <input type="button" name="" value="." className="btn" />
        <input type="button" name="" value="=" className="btn color" />
      </div>

    </div>
  </div>
);

export default Calculator;
