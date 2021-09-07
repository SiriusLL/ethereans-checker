import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState();
  // const [term, setTerm] = useState();
  // const [name, setName] = useState([]);

  useEffect(() => {
    let num = 9045;
    axios
      .get(
        `https://ipfs.io/ipfs/QmdYxMgJJS8MvMScv1AKnWkSxGGeMbPaKKoZ1nweXNTcT7/${num}`
      )
      .then((res) => {
        console.log("res", res.data);
        // setState(JSON.stringify(res.data));
        setState(res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  console.log("s", state);
  // console.log("image", {`https://ipfs.io/ipfs/${state.image.split('/')[2]`})
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <div>{state && state.name}</div>
      <img
        src={`https://ipfs.io/ipfs/${state && state.image.split("/")[2]}`}
        alt={state && state.name}
      ></img>
      <div></div>
    </div>
  );
}

export default App;
