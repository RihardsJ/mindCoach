import styled from "styled-components";
import { ReactComponent as PencilSVG } from "../assets/pencil.svg";

const GreenButton = styled.button`
  position: relative;
  font-size: 1em;
  color: var(--white);
  background-color: var(--lime);
  padding: 0.5em;
  cursor: pointer;
  margin-bottom: 1rem;
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

const SubmitButton = ({ children }) => {
  return (
    <>
      <GreenButton>
        {children} <Pencil />
      </GreenButton>
    </>
  );
};

const ResetButton = styled(GreenButton)`
  background-color: var(--red);
`;

const SwitchButton = styled(GreenButton)`
  background-color: var(--black);
`;

export { SubmitButton, ResetButton, SwitchButton };
