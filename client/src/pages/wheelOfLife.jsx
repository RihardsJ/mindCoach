import Logo from "../components/logo";
import { Title, WhiteBoard } from "./wheelOfLife.styles";
import WhiteBoardComponents from "../components/WhiteBoardComponents.jsx";
import { useState } from "react";
import { SwitchButton } from "../components/buttons.jsx";

const WheelOfLifePage = () => {
  const [formData, setFormData] = useState({
    Money: [0.2, "green"],
    Friends: [0.3, "yellow"],
    Health: [0.4, "blue"],
    Family: [0.5, "red"],
    Spirituality: [0.6, "cyan"],
    Love: [0.7, "red"],
    Career: [0.8, "green"],
    Fun: [1, "orange"],
  });

  const [component, setComponentTo] = useState("WheelForm");

  return (
    <>
      <Logo />
      <Title />
      <WhiteBoard>
        <WhiteBoardComponents
          formData={{ formData, setFormData }}
          component={component}
        />
        <SwitchButton onClick={() => setComponentTo("WheelForm")}>
          Form
        </SwitchButton>
        <SwitchButton onClick={() => setComponentTo("PolarChart")}>
          Wheel of Life
        </SwitchButton>
      </WhiteBoard>
    </>
  );
};

export default WheelOfLifePage;
