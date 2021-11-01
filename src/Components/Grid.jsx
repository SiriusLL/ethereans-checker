import React, { useContext } from "react";
import NftForm from "./NftForm";
import { Context } from "../Context";

import { ThemeProvider, createTheme, Row, Col } from "arwes";

const Grid = () => {
  const { data, setData, rowColor, getData } = useContext(Context);
  // if there is data grabs image data and creates img tag
  function showImage() {
    if (data) {
      return (
        <img
          src={`https://ipfs.io/ipfs/${data && data.image.split("/")[2]}`}
          alt={data && data.name}
        />
      );
    } else {
      return <p>Enter an NFT# bewtwen 1 and 10,000</p>;
    }
  }

  // Creates trait table
  function renderAttributeData(attr, i) {
    return (
      <tr key={i} className={rowColor(i)}>
        <td>{`${attr.trait_type}`}</td>
        <td>{`${attr.value}`}</td>
      </tr>
    );
  }

  //Renders Grid
  return (
    <ThemeProvider theme={createTheme()}>
      <>
        <Row>
          <Col sm={6}>
            <div className="image">{showImage()}</div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={12}>
            {/* if there is data shows traits table */}
            <div>
              {data && (
                <div className="traits">
                  <div>{data && data.name}</div>
                  <table>
                    {data && data.attributes.map(renderAttributeData)}
                  </table>
                </div>
              )}

              <div className="userInput">
                <NftForm
                // setData={setData}
                // getData={getData}
                />
              </div>
            </div>
          </Col>
        </Row>
      </>
    </ThemeProvider>
  );
};

export default Grid;
