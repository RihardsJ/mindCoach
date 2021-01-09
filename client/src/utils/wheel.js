const createPolarPieChart = () => {
  const getxyCoordiantes = (percent) => {
    const X = Math.cos(2 * Math.PI * percent);
    const Y = Math.sin(2 * Math.PI * percent);
    return { X, Y };
  };
};

export default createPolarPieChart;
