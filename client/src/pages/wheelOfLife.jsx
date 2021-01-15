import Logo from "../components/logo.jsx";
import { Title, WhiteBoard } from "./wheelOfLife.styles";
import { PencilButton } from "../components/buttons.jsx";
import PolarChart from "../components/polarChart";

const WheelOfLifePage = () => {
  return (
    <>
      <Logo />
      <Title />
      <WhiteBoard>
        <PolarChart />
        <PencilButton>Reset</PencilButton>
      </WhiteBoard>
    </>
  );
};

export default WheelOfLifePage;
