import React from "react";

import { ThemeProvider, createTheme, Row, Col } from "arwes";

const Grid = ({ data, input, setInput, validate, rowColor }) => {
  
  function showImage() {
    if (data) {
      return (
        <img
          src={`https://ipfs.io/ipfs/${
            data && data.image.split("/")[2]
          }`}
          alt={data && data.name}
        />
      )
    } else {
      return (<p>Enter an NFT# bewtwen 1 and 10,000</p>);
    }
  }
  
  function renderAttributeData(attr, i) {
    // <div key={i}>{`${attr.trait_type}: ${attr.value}`}</div>
    return (
      <tr key={i} className={rowColor(i)}>
        <td>{`${attr.trait_type}`}</td>
        <td>{`${attr.value}`}</td>
      </tr>
    );
  }



  return (
    <ThemeProvider theme={createTheme()}>
      <>
        <Row>
          <Col s={6}>
            <div className="image">
              {showImage()}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={12}>
            <div></div>
            <div>
              <div className="traits">
                <div>{data && data.name}</div>
                <table>
                  {data && data.attributes.map(renderAttributeData)}
                </table>
              </div>
              <div className="userInput">
                <form
                  autoComplete="off"
                  onSubmit={(event) => event.preventDefault()}
                >
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
                  <button onClick={() => validate(input)}>AQUIRE TARGET</button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </>
    </ThemeProvider>
  );
};

export default Grid;
