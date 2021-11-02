import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Grid from "./Components/Grid";
import NavBar from "./Components/NavBar";
import { Context } from "./Context";

function App() {
  const [data, setData] = useState();
  const [dataEffect, setDataEffect] = useState();
  // const [input, setInput] = useState();

  useEffect(() => {
    axios
      .get(
        `https://ipfs.io/ipfs/QmdYxMgJJS8MvMScv1AKnWkSxGGeMbPaKKoZ1nweXNTcT7/${dataEffect}`
      )
      .then((res) => {
        console.log("res", res.data);
        // setState(JSON.stringify(res.data));
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [dataEffect]);

  const ethereum = window.ethereum;

  if (ethereum)
    ethereum.on("accountsChanged", (accounts) => {
      console.log(accounts[0]);
    });

  // const getData = async (input) => {
  //   await axios
  //     .get(
  //       `https://ipfs.io/ipfs/QmdYxMgJJS8MvMScv1AKnWkSxGGeMbPaKKoZ1nweXNTcT7/${input}`
  //     )
  //     .then((res) => {
  //       console.log("res", res.data);
  //       // setState(JSON.stringify(res.data));
  //       setData(res.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // };

  const rowColor = (index) => {
    if (index % 2 === 0) {
      return "even-r";
    } else {
      return "odd-r";
    }
  };

  return (
    <>
      <Context.Provider value={{ data, setData, rowColor, setDataEffect }}>
        <div className="App">
          <NavBar />
          <div className="content">
            <Grid
            // data={data}
            // setData={setData}
            // validate={"placehlder"}
            // rowColor={rowColor}
            // getData={getData}
            />
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

//lazy loading images

export default App;
