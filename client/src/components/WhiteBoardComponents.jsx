import PolarChart from "../components/polarChart";
import WheelForm from "../components/wheelForm";

const componentCollection = {
  PolarChart: PolarChart,
  WheelForm: WheelForm,
};

const WhiteBoardComponents = ({ formData, component }) => {
  const ActiveComponent = componentCollection[component];

  return <ActiveComponent formData={formData} />;
};

export default WhiteBoardComponents;
