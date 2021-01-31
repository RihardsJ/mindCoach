import styled, { keyframes } from "styled-components";
import { ReactComponent as PencilSVG } from "../assets/pencil.svg";
import { ReactComponent as ResetIcon } from "../assets/reset.svg";

const drawing = keyframes`
  0 {
    transform: translate(0px, 0px);
  }

  25% {
    transform: translate(12px, 12px);
  }

  50% {
    transform: translate(0px, 0px);
  }

  65% {
    transform: translate(12px, 12px);
  }

  70% {
    transform: translate(0px, 0px);
  }

  80% {
    transform: translate(10px, 10px);
  }

  100% {
    transform: translate(0px, 0px);
  }
`;

const RedButton = styled.button`
  position: relative;
  font-size: 1em;
  color: var(--white);
  background-color: var(--red);
  padding: 0.5em;
  cursor: pointer;
  outline: none;
  margin-bottom: 1rem;
  border-radius: 10px;
  border-style: none;
  box-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.5),
    -1px -1px 1px hsla(0, 100%, 100%, 0.25);

  &:hover :last-child {
    transform-origin: center;
    animation: ${drawing} 1.2s linear;
  }
`;

const PencilIcon = styled(PencilSVG)`
  position: absolute;
  top: -9px;
  right: 30%;
`;

const SubmitButton = () => {
  return (
    <>
      <RedButton type="submit">
        Draw <PencilIcon />
      </RedButton>
    </>
  );
};

const rotation = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const RedResetButton = styled(RedButton)`
  margin-top: 3rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0.6em;
  z-index: 10;

  &:hover :last-child {
    transform-origin: center;
    animation: ${rotation} 2.5s infinite linear;
  }
`;

const ResetButton = ({ component }) => {
  return (
    <>
      <RedResetButton onClick={() => component.setComponentName("WheelForm")}>
        Reset <ResetIcon />
      </RedResetButton>
    </>
  );
};

export { SubmitButton, ResetButton };
