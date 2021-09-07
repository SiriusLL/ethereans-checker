import React, { useState } from "react";
import axios from "axios";
import "./App.css";

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
      // return <div>Must be a number between 1 and 11000</div>;
      return;
    }
    // console.log(value);
    // setNumber(value);
    getData(value);
  };

  return (
    <div className="App">
      {data ? console.log("n", data.image.split("/")[2]) : null}
      {data ? (
        <img
          src={`https://ipfs.io/ipfs/${data && data.image.split("/")[2]}`}
          alt={data && data.name}
        />
      ) : (
        <p>Please entinput</p>
      )}
      <div>
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <label for="ident">Your NFT number here</label>
          <input
            name="ident"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              // getData();
            }}
            type="text"
          ></input>
          <button onClick={() => validate(input)}>submit</button>
        </form>
      </div>
      <div>{data && data.name}</div>
      <div>
        {data &&
          data.attributes.map((attr) => (
            <div>{`${attr.trait_type}: ${attr.value}`}</div>
          ))}
      </div>
    </div>
  );
}

//lazy loading images

export default App;
