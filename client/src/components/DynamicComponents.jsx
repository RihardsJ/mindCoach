import PolarChart from "./polarChart";
import WheelForm from "./wheelForm";

const componentCollection = {
  PolarChart: PolarChart,
  WheelForm: WheelForm,
};

const WhiteBoardComponents = ({ formData, component }) => {
  const { componentName } = component;
  const ActiveComponent = componentCollection[componentName];

  return <ActiveComponent formData={formData} component={component} />;
};

export default WhiteBoardComponents;
