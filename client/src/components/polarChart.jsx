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

const PolarChartContainer = styled.div`
  position: relative;
  width: 85%;
`;

const CircleSVG = styled.svg`
  position: absolute;
`;

const LineSVG = styled.svg`
  position: absolute;
  z-index: 2;
  transform: rotate(${(props) => props.angle + "deg"});
`;

const PolarPieSVG = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: auto;
`;

const PolarChart = () => {
  const [polarChartSlices] = useState(createPolarChartSlices(formData));

  useEffect(() => {
    console.log(polarChartSlices);
  });

  const createCircles = () => {
    const circles = [];
    for (let i = 9; i <= 100; i += 10) {
      circles.push(
        <circle
          key={i.toString()}
          cx="100"
          cy="100"
          r={i}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="1"
        />
      );
    }
    return circles;
  };

  const createSliceBorders = () => {
    const sliceBorders = [];
    const numberOfSlices = Object.keys(polarChartSlices).length;

    const degree = 360 / numberOfSlices;

    for (let i = degree; i <= 360; i += degree) {
      sliceBorders.push(
        <LineSVG viewBox="0 0 200 200" angle={i} key={i.toString()}>
          <line
            x1="0"
            y1="100"
            x2="0"
            y2="0"
            strokeWidth="1"
            stroke="var(--white)"
            transform="translate(100, 0)"
          />
        </LineSVG>
      );
    }

    return sliceBorders;
  };

  const createPath = () => {
    return Object.keys(polarChartSlices).map((slice, i) => (
      <path
        key={i.toString()}
        d={polarChartSlices[slice].path}
        fill={polarChartSlices[slice].colour}
        style={{ transform: "scale(" + polarChartSlices[slice].scale + ")" }}
      ></path>
    ));
  };

  return (
    <PolarChartContainer>
      <CircleSVG viewBox="0 0 200 200" className="circle">
        {createCircles()}
      </CircleSVG>
      {createSliceBorders()}
      <PolarPieSVG viewBox="-1 -1 2 2">{createPath()}</PolarPieSVG>
    </PolarChartContainer>
  );
};

export default PolarChart;
