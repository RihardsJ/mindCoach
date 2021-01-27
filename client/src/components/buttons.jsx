import styled from "styled-components";
import { ReactComponent as PencilSVG } from "../assets/pencil.svg";

const RedButton = styled.button`
  position: relative;
  font-size: 1em;
  color: var(--white);
  background-color: var(--red);
  padding: 0.5em;
  cursor: pointer;
  border-radius: 10px;
  border-style: none;
  box-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.5),
    -1px -1px 1px hsla(0, 100%, 100%, 0.25);
`;

const Pencil = styled(PencilSVG)`
  position: absolute;
  top: -10px;
  right: -10px;
`;

const PencilButton = ({ children }) => {
  return (
    <>
      <RedButton>
        {children} <Pencil />
      </RedButton>
    </>
  );
};

export { PencilButton };
