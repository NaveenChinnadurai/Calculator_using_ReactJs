import './App.css';
import  {useState} from 'react'
function App() {
  const [val, setval] = useState("");
  const solve=(props)=>{
    setval(val.concat(props.target.value));
  }
  const Clear=()=>{
    setval("");
  }
  const Back=()=>{
    setval(val.slice(0,val.length-1));
  }
  const soln=()=>{
    try {
      setval(eval(val).toString());
    } catch (error) {
      setval("ErroR");
    }
  }
  return(
    <div className="App">
      <h1>Calculator <br/> React Web App</h1>
      <div className="calciDiv">
          <div className="displayDiv">{val}</div>
          <div className="btns">
            <div className="btn">
              <button className="longBtn clr-btn" onClick={Clear}>Clear</button>
              <button onClick={Back}>←</button>
              <button value='/' onClick={solve}>&divide;</button>
            </div>
            <div className="btn">
              <button value='7' onClick={solve}>7</button>
              <button value='8' onClick={solve}>8</button>
              <button value='9' onClick={solve}>9</button>
              <button value='*' onClick={solve}>&times;</button>
            </div>
            <div className="btn">
              <button value='4' onClick={solve}>4</button>
              <button value='5' onClick={solve}>5</button>
              <button value='6' onClick={solve}>6</button>
              <button value='-' onClick={solve}>-</button>
            </div>
            <div className="btn">
              <button value='1' onClick={solve}>1</button>
              <button value='2' onClick={solve}>2</button>
              <button value='3' onClick={solve}>3</button>
              <button value='+' onClick={solve}>+</button>
            </div>
            <div className="btn">
              <button value='.' onClick={solve}>.</button>
              <button value='0' onClick={solve}>0</button>
              <button className="longBtn" onClick={soln}>=</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
