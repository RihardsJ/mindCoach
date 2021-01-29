import Logo from "../components/logo";
import { Title, WhiteBoard } from "./wheelOfLife.styles";
import PolarChart from "../components/polarChart";
import WheelForm from "../components/wheelForm";
import { useState } from "react";

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

  return (
    <>
      <Logo />
      <Title />
      <WhiteBoard>
        <WheelForm formData={{ formData, setFormData }} />
        {/* <PolarChart formData={formData} /> */}
      </WhiteBoard>
    </>
  );
};

export default WheelOfLifePage;
