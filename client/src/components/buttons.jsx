import styled from "styled-components";
import { ReactComponent as PencilSVG } from "../assets/pencil.svg";

const RedButton = styled.button`
  position: relative;
  font-size: 1em;
  color: var(--white);
  background-color: var(--red);
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

const SubmitButton = () => {
  return (
    <>
      <RedButton type="submit">
        Draw <Pencil />
      </RedButton>
    </>
  );
};

const ResetButton = styled(RedButton)`
  margin-top: 3rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0.6em;
  z-index: 10;
`;

export { SubmitButton, ResetButton };
