import { useState } from 'react'
import './App.css'
// 
function App() {
  let [players, setPlayers] = useState([])
  let [playersAdded, setplayersAdded] = useState(false)


  const handleChange = (e) => {
    console.log("e", e);
    let a=[]
    a.push(e.target.value)
    setPlayers(a)
  }
  const handleSubmit = (e) => {
    console.log("e", e);
    setplayersAdded(true)
  }
  return (
    <div className="App">
      <input type='text' name="players" onChange={handleChange} value={players}/>
      <button onClick={handleSubmit}>Add</button>
      <button>Delete</button>
      <div>
        <div>{playersAdded ? players : ""}</div>
      </div>
    </div>
  );
}

export default App;
