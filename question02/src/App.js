
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] =useState([])
  const [fillIndex,setFillIndex] = useState([])
  async function getTable() {
    return await axios.get('https://api.publicapis.org/categories').then(
      res => {
        setData(res.data)
        setFillIndex(res.data.map((val,index)=> index))
      }
    )
  }
  function fillterData(filterText) {
    let regx = new RegExp(filterText)
    let newArray = []
    if(!filterText){
      return data.map((val,index)=> index)
    }
    data.forEach((val,index) => {
      if(regx.exec(val.toLowerCase())){
        newArray.push(index)
      }
    })
    return newArray
  }
  function onChangeInput(filterText) {
    setFillIndex(fillterData(filterText.target.value))
  }
  useEffect(()=>{
      getTable()
  },[])
  return (
    <div className="App">
      <div className="Input">
        Fillter 
        <input onChange={onChangeInput} style={{marginLeft:5}}>
        </input>
      </div>
        <div className="Table">
          <table >
            <tr>
              <th>Number</th>
              <th>Value</th>
            </tr>
            {fillIndex.map((val,index) =>(
              <tr>
                  <td>{index+1}</td>
                  <td>{data[val]}</td>
              </tr>
            ))}
          </table> 
        </div>
    </div>
  );
}

export default App;
