import React, { useContext, Lazy, Suspense } from "react";
import { Context } from "../Context";

const ShowImage = () => {
  const { data, rowColor } = useContext(Context);
  if (data) {
    return (
      // <Suspense fallback={<div>Loading . . .</div>}>
      <img
        src={`https://ipfs.io/ipfs/${data && data.image.split("/")[2]}`}
        alt={data && data.name}
      />
      // </Suspense>
    );
  } else {
    return <p>Enter an NFT# bewtwen 1 and 10,000</p>;
  }
};

export default ShowImage;
