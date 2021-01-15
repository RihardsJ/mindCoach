import { useState, useEffect } from "react";
import styled from "styled-components";
import createPolarChartSlices from "../utils/polarChart";

const formData = {
  money: [1, "green"],
  friends: [0.3, "yellow"],
  health: [0.7, "blue"],
  family: [0.9, "orange"],
  spirituality: [0.6, "cyan"],
  love: [1, "red"],
  career: [0.9, "green"],
  fun: [1, "sand"],
};

const SVG = styled.svg`
  transform: rotate(-90deg);
`;

const PolarChart = () => {
  const [polarChartSlices, setPolarChartSlices] = useState(
    createPolarChartSlices(formData)
  );

  useEffect(() => {
    console.log(polarChartSlices);
  }, []);

  const createPath = () => {
    return Object.keys(polarChartSlices).map((slice) => (
      <path
        d={polarChartSlices[slice].path}
        fill={polarChartSlices[slice].colour}
        style={{ transform: "scale(" + polarChartSlices[slice].scale + ")" }}
      ></path>
    ));
  };

  return <SVG viewBox="-1 -1 2 2">{createPath()}</SVG>;
};

export default PolarChart;
