import { useState, useEffect } from "react";
import styled from "styled-components";
import createPolarChartSlices from "../utils/polarChart";

const PolarChartContainer = styled.div`
  position: relative;
  width: 55%;
  margin-top: 2rem;
  margin-bottom: 2rem;
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

const Label = styled.text`
  font-size: 0.5rem;
  text-shadow: 1px 1px 1px hsl(0, 0%, 20%);
`;

const PolarChart = ({ formData }) => {
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

  const addLabels = () => {
    const Labels = [];

    const coordinates = {
      1: { x: 150, y: 0 },
      2: { x: 200, y: 50 },
      3: { x: 200, y: 150 },
      4: { x: 150, y: 200 },
      5: { x: 10, y: 200 },
      6: { x: -20, y: 150 },
      7: { x: -30, y: 50 },
      8: { x: 30, y: 0 },
    };
    let i = 1;

    for (const text in polarChartSlices) {
      Labels.push(
        <Label
          x={coordinates[i].x}
          y={coordinates[i].y}
          fill={polarChartSlices[text].colour}
          key={i}
        >
          {text}
        </Label>
      );
      i++;
    }
    return Labels;
  };

  return (
    <PolarChartContainer>
      <CircleSVG viewBox="0 0 200 200" className="circle" overflow="visible">
        {createCircles()}
        {addLabels()}
      </CircleSVG>
      {createSliceBorders()}
      <PolarPieSVG viewBox="-1 -1 2 2">{createPath()}</PolarPieSVG>
    </PolarChartContainer>
  );
};

export default PolarChart;
