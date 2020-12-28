import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({
  rgb,
  weight,
  index,
  hexColor,
  selectedOption,
  brightness,
}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  // let brigthness = selectedOption;
  // if (brigthness === 20) {
  //   brigthness = brigthness / 4;
  // } else if (brigthness === 10) {
  //   brigthness = brigthness / 1;
  // } else if (brigthness === 5) {
  //   brigthness = brigthness / 0.25;
  // }

  //  const textColour = brightness > 125 ? "color-light" : null;

  //  className={`color ${index > brigthness && "color-light"}`}
  //     style={{ backgroundColor: `rgb(${bcg})` }}
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`color ${brightness < 50 ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
