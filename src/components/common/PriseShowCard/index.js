import React from "react";

function PriseShowCard(props) {
  const {
    heading,
    value,
    currency,
    subHeading,
  }=props;
  return (
    <div>
      <h3>{heading}</h3>
      <div>{currency}{value}</div>
      <div>{subHeading}</div>
    </div>
  );
}

export default PriseShowCard;
