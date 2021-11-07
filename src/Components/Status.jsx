import React from "react";

const Status = (props) => {
  return (
    <main className="image">
      <img className="status-image" src="/status.png" alt="Loading" />
      <h1 className="text--semi-bold">{props.message}</h1>
    </main>
  );
};

export default Status;
