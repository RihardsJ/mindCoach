import Logo from "../components/logo";
import { Title, WhiteBoard } from "./wheelOfLife.styles";
import WhiteBoardComponents from "../components/DynamicComponents.jsx";
import { useState } from "react";

const WheelOfLifePage = () => {
  const [formData, setFormData] = useState({
    Money: [0.5, "green"],
    Friends: [0.5, "yellow"],
    Health: [0.5, "blue"],
    Family: [0.5, "red"],
    Spirituality: [0.5, "cyan"],
    Love: [0.5, "red"],
    Career: [0.5, "green"],
    Fun: [0.5, "orange"],
  });

  const [componentName, setComponentName] = useState("WheelForm");

  return (
    <>
      <Logo />
      <Title />
      <WhiteBoard>
        <WhiteBoardComponents
          formData={{ formData, setFormData }}
          component={{ componentName, setComponentName }}
        />
      </WhiteBoard>
    </>
  );
};

export default WheelOfLifePage;
