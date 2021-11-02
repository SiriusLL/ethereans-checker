import { useState, useContext } from "react";
import { Context } from "../Context";

const NftForm = () => {
  const { setData, setDataEffect } = useContext(Context);

  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  //validates form for only numbers between 1 and 11,000
  const validate = (rawValue, e) => {
    const itsNotANumber = () => {
      if (isNaN(rawValue) || rawValue % 1 !== 0) {
        return true;
      }
      return false;
    };

    if (rawValue <= 0 || rawValue > 11000 || itsNotANumber()) {
      console.log("invalid");

      setError(<p className="error">Must be a number between 1 and 11000</p>);
      setData(null);
      return;
    }
    setError("");
    setInput("");
    setDataEffect(rawValue);
    // getData(rawValue);
  };

  return (
    <>
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        {error}
        <input
          id="ident"
          name="ident"
          placeholder="NFT Number"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
        />
        <button
          onClick={(e) => {
            validate(input, e);
          }}
        >
          AQUIRE TARGET
        </button>
      </form>
    </>
  );
};

export default NftForm;
