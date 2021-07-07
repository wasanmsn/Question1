
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [Input,setInput] = useState(1)
  const [calculate,setCalculate] = useState("isPrime")
  const [answer,setAnswer] = useState(true)
  function getAnswer() {
    switch (calculate) {
      case "isPrime":
        setAnswer(isPrime(Input))
        break;
      case "isFibonacci":
        setAnswer(isFibonacci(Input))
        break;   
      default:
        break; 
    }
  }
  function isPerfSqr(x){
    let sqr = parseInt(Math.sqrt(x))
    return (sqr*sqr === x)
  }
  function isFibonacci(num){
    return isPerfSqr(5 * num * num + 4)||isPerfSqr(5 * num * num - 4)
  }
  function isPrime(num) {
    for (let i = 2; i < num; i++){
        if(num % i === 0) return false
    }
    return num > 1 
  }
  useEffect(()=>{
    getAnswer()
  },[Input])
  useEffect(()=>{
    getAnswer() 
  },[calculate]) 
  return (
    <div className="grid" >
        <div  className="col1" >
              <input type="text" value={Input} onChange={e => {
                let val = Math.round(e.target.value.replace(/-\d/,1))
                if(isNaN(parseFloat(val))){
                  return setInput('')
                }
                setInput(val)}}>
                </input>
        </div>
        <div className="col2" >
              <select  onChange={e => {
                setCalculate(e.target.value)
              }}>
                <option value="isPrime">isPrime</option>
                <option value="isFibonacci">isFibonacci</option>
              </select>
        </div>
        <div className="col3" >{answer ? 'TRUE':'FALSE'}</div>
    </div>
  );
}


export default App;
