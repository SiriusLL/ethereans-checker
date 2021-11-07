import React, { useContext, useState } from "react";
import NftForm from "./NftForm";
import { Context } from "../Context";
import ShowImage from "./ShowImage";
import Status from "./Status";
import { ThemeProvider, createTheme, Row, Col } from "arwes";

const Grid = () => {
  // const { loading, setLoading } = useState(false);
  const { data, rowColor, loading } = useContext(Context);

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
            <div className="image">{loading ? <Status /> : <ShowImage />}</div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={12}>
            {/* if there is data shows traits table */}
            <div>
              {loading ? (
                <Status />
              ) : (
                data && (
                  <div className="traits">
                    <div>{data && data.name}</div>
                    <table>
                      {data && data.attributes.map(renderAttributeData)}
                    </table>
                  </div>
                )
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
