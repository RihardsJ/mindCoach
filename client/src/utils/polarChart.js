const createSlicesForPolarChart = (areasOfLife) => {
  const polarChartSlices = {};
  const percentage = 1 / Object.keys(areasOfLife).length;

  for (const area in areasOfLife) {
    polarChartSlices[area] = {
      percent: percentage,
      scale: areasOfLife[area][0],
      colour: `var(--${areasOfLife[area][1]})`,
    };
  }

  const getxyCoordiantes = (percent) => {
    const X = Math.cos(2 * Math.PI * percent);
    const Y = Math.sin(2 * Math.PI * percent);
    return [X, Y];
  };

  let cumulativePercent = 0;

  for (const slice in polarChartSlices) {
    const [startX, startY] = getxyCoordiantes(cumulativePercent);
    cumulativePercent += polarChartSlices[slice].percent;
    const [endX, endY] = getxyCoordiantes(cumulativePercent);
    const largeArcFlag = polarChartSlices[slice].percent > 0.5 ? 1 : 0;

    polarChartSlices[slice].path = [
      `M ${startX} ${startY}`, // Move
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
      `L 0 0`,
      // Line
    ].join(" ");
  }
  return polarChartSlices;
};

export default createSlicesForPolarChart;
