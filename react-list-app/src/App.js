import React, { useState, useContext, createContext, useEffect } from "react";
import './App.css'
import CustomHook from './customHook'
import GoogleWindow from './google'
import GridModel from './grid'
import Timer from './Timer'
import Home from './portfoliohome'
import axios from "axios";

// const ThemeContext = createContext("light");
const ThemeContext = createContext({ name: "vimlesh", age: "29" });




function App() {
  let [player, setPlayer] = useState("")
  const [playersAdded, setMasterplayersAdded] = useState([])
  const [finalPlayersTeam, setFinalPlayersTeam] = useState([])
  const [count, setCount] = useState(0);


  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get("https://dummyjson.com/users").then((response) => {
  //     setData(response.data.users);
  //   });
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
   
    return () => clearInterval(interval);
    }, []);

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
  return (<>
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
    {/* <Timer start={0} /> */}
    {/* <Home/> */}

    {/* const ThemeContext = createContext("light"); */}

    {/* <ThemeContext.Provider value={{name:"kamlesh", age:"45"}}>
      <Toolbar />
    </ThemeContext.Provider>


  </>
  );
}
function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme.name}</div>;    
} */}



    {/* <div>{data.map((d) => <p key={d.id}>{d.firstName}</p>)}</div> */}
    <div>Count: {count}</div>
    </>)
}

export default App;


