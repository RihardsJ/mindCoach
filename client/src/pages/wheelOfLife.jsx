import Logo from "../components/logo.jsx";
import { Title, WhiteBoard } from "./wheelOfLife.styles";
import { PencilButton } from "../components/buttons";
import PolarChart from "../components/polarChart";
import WheelForm from "../components/wheelForm.jsx";
import { useState } from "react";

const WheelOfLifePage = () => {
  const [formData, setFormData] = useState({
    Money: [0.7, "green"],
    Friends: [0.5, "yellow"],
    Health: [0.5, "blue"],
    Family: [0.7, "red"],
    Spirituality: [0.5, "cyan"],
    Love: [0.5, "red"],
    Career: [0.5, "green"],
    Fun: [0.2, "orange"],
  });

  return (
    <>
      <Logo />
      <Title />
      <WhiteBoard>
        <WheelForm formData={{ formData, setFormData }} />
        {/* <PolarChart formData={formData} /> */}
        {/* <PencilButton>Reset</PencilButton> */}
      </WhiteBoard>
    </>
  );
};

export default WheelOfLifePage;
