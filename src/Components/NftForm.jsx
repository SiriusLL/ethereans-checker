import { getDefaultNormalizer } from "@testing-library/dom";
import { useState } from "react";

const NftForm = ({ getData }) => {
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  
  const itsNotANumber = () => {
    if (isNaN(rawValue) || rawValue % 1 !== 0) {
      return true;
    }
    return false;
  };

  const validate = (rawValue, e) => {
   
  
    if (rawValue <= 0 || rawValue > 11000 || itsNotANumber()) {
      console.log("invalid");

      setError(<p className="error">Must be a number between 1 and 11000</p>);
      // setInput("");
      return;
    }
    setError("");
    setInput("");
    getData(rawValue);
  };
  return (
    <>
      {error}
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
      <button
        onClick={(e) => {
          validate(input, e);
          // console.log("hello", e);
        }}
      >
        AQUIRE TARGET
      </button>
    </>
  );
};

export default NftForm;
