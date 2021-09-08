import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { isDOMComponentElement } from "react-dom/cjs/react-dom-test-utils.production.min";

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

  // {(i % 2 === 0) ? className="even-r" : className="odd-r"}

  return (
    <div className="App">
      <div className="image">
        {data ? console.log("n", data.image.split("/")[2]) : null}
        {data ? (
          <img
            src={`https://ipfs.io/ipfs/${data && data.image.split("/")[2]}`}
            alt={data && data.name}
          />
        ) : (
          <p>Please entinput</p>
        )}
      </div>
      <div className="userInput">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          {/* <label for="ident">Your NFT number here</label> */}
          <input
            id="ident"
            name="ident"
            placeholder="NFT Number"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              // getData();
            }}
            type="text"
          />
          {/* <p className={invalid()}>Number must be between 1 and 10,000</p> */}
          <button onClick={() => validate(input)}>submit</button>
        </form>
      </div>
      <div className="traits">
        <div>{data && data.name}</div>
        <table>
          {data &&
            data.attributes.map((attr, i) => (
              // <div key={i}>{`${attr.trait_type}: ${attr.value}`}</div>
              <tr key={i} className={rowColor(i)}>
                <td>{`${attr.trait_type}`}</td>
                <td>{`${attr.value}`}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

//lazy loading images

export default App;
