import { useState } from 'react'
import './App.css'
import CustomHook from './customHook'
import GoogleWindow from './google'
import GridModel from './grid'
import Timer from './Timer'
function App() {
  let [player, setPlayer] = useState("")
  const [playersAdded, setMasterplayersAdded] = useState([])
  const [finalPlayersTeam, setFinalPlayersTeam] = useState([])

  const handleChange = (e) => {
    setPlayer(e.target.value)
  }
  const handleSubmit = (e) => {

    playersAdded = playersAdded.splice()
    setMasterplayersAdded([...playersAdded, player])
  }
  const handleFinalSubmit = (member) => {
    setFinalPlayersTeam([...finalPlayersTeam, member])
  }
  return (
    <div className="App">
      {/* <CustomHook></CustomHook>
      <input type='text' name="players" onChange={handleChange} value={player} />
      <button type="button" onClick={() => handleSubmit()} >Add</button>
      <button type="button" onClick={() => setPlayer("")}>Delete</button> 
      <div>
        <h1>Master Team</h1>
        <div>{playersAdded.length > 0 ?
          playersAdded.map((ele, ind) => {
            return <li key={ind}>{ele} <button type='button' onClick={() => handleFinalSubmit(ele)} >Add</button>
              <button onClick={() => setPlayer("")}>Delete</button></li >
          })
          : "No Players Added"}</div>
      </div>
      <div>
        <h1>Final Team</h1>
        <div>{finalPlayersTeam.length > 0 ?
          finalPlayersTeam.map((ele, ind) => {
            return <li key={ind}>{ele} <button onClick={() => setPlayer("")}>Delete</button></li >
          })
          : "No Players Added"}</div>
      </div> */}
      {/* <GoogleWindow/> */}
      {/* <GridModel/> */}
      <Timer start={0} />

    </div >
  );
}

export default App;
