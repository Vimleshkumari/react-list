import { useState } from 'react'
import './App.css'
// 
function App() {
  let [player, setPlayer] = useState("")
  const [playersAdded, setplayersAdded] = useState([])


  const handleChange = (e) => {
    setPlayer(e.target.value)
  }
  const handleSubmit = (e) => {
    console.log("players", player);

    playersAdded.push(player)
    setplayersAdded(playersAdded)
    // setPlayer("")
  }
  return (
    <div className="App">
      <input type='text' name="players" onChange={handleChange} value={player} />
      <button onClick={handleSubmit} disabled={!player}>Add</button>
      <button onClick={() => setPlayer("")}>Delete</button>
      <div>
        <h1>Master Team</h1>
        <div>{playersAdded.length ?
          playersAdded.map((ele, ind) => {
            return <li key={ind}>{ele} <button onClick={handleSubmit} disabled={!player}>Add</button>
              <button onClick={() => setPlayer("")}>Delete</button></li >

          })
          : "No Players Added"}</div>
      </div>
    </div>
  );
}

export default App;
