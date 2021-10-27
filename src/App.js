import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Grid from "./Components/Grid";
// import Buttons from "./Components/Buttons";

function App() {
  const [data, setData] = useState();
  const [input, setInput] = useState();

  // useEffect(() => {
  //   axios
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
  // }, [input]);

  const getData = async (input) => {
    await axios
      .get(
        `https://ipfs.io/ipfs/QmdYxMgJJS8MvMScv1AKnWkSxGGeMbPaKKoZ1nweXNTcT7/${input}`
      )
      .then((res) => {
        console.log("res", res.data);
        // setState(JSON.stringify(res.data));
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  // console.log("s", input);

  const validate = (rawValue) => {
    console.log("rawValue", rawValue);
    let value = Number(rawValue);
    if (value <= 0 || value > 11000) {
      console.log("invalid");
      // const invalid = () => invalid
      return <div>Must be a number between 1 and 11000</div>;
      // return;
    }
    // console.log(value);
    // setNumber(value);
    getData(value);
    setInput("");
  };

  const rowColor = (index) => {
    if (index % 2 === 0) {
      return "even-r";
    } else {
      return "odd-r";
    }
  };

  return (
    <>
      <div className="App">
        <Grid
          data={data}
          input={input}
          setInput={setInput}
          validate={validate}
          rowColor={rowColor}
        />
        {/* <Buttons /> */}
      </div>
    </>
  );
}

//lazy loading images

export default App;
