import {useState, useRef} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function add(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function subtract(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function multiply(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0; 
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult((prVal) => prVal * 0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Basic Calculator</h1>
        <h2>doing basic calculation</h2>
      </div> 
      <form> 
        <p ref={resultRef}> {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="please enter your number" 
        /> 
        <button onClick={add}>add</button>
        <button onClick={subtract}>subtract</button> 
        <button onClick={multiply}>multiply</button> 
        <button onClick={divide}>divide</button>  
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
