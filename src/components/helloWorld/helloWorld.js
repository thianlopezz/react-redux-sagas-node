import React from "react";

const HelloWorld = ({ hellos, hello }) => {
  let containerStyles = {
    width: "100%"
  };
  return (
    <div styles={containerStyles}>
      <h1>Hello world!</h1>
      <p>{hello}</p>
      <h1>Hello worlds!</h1>
      {hellos && hellos.map((hello, i) => <p key={i}>{hello}</p>)}
    </div>
  );
};

export default HelloWorld;
