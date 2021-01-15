import styled from "styled-components";
import logo from "../assets/logo.png";

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 150px;
  height: auto;
`;

const Logo = () => {
  return <Image src={logo} alt="Logo of Mind Coach Anita S." />;
};

export default Logo;
