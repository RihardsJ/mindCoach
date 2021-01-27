import styled from "styled-components";
import { useRef, useCallback, useImperativeHandle } from "react";

const InputNumberContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  background: transparent;
  text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.35);
  width: 3rem;
  border-style: none;
  font-weight: 700;
  font-size: 1.5rem;
  appearance: textfield;
`;

const IncrementButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 40px;
  top: 20%;
  border-style: solid;
  border-width: 2px 2px 0 0;
  border-color: var(--black);
  transform: rotate(45deg);
`;

const DecrementButton = styled(IncrementButton)`
  left: -30px;
  top: 20%;
  border-width: 0 0 2px 2px;
  transform: rotate(45deg);
`;

const InputNumber = ({ lifeArea, ref }) => {
  const InputNumberReference = useRef(null);

  useImperativeHandle(ref, () => InputNumberReference.current, []);

  const Add = useCallback(
    (e) => {
      e.preventDefault();
      InputNumberReference.current.stepDown();
    },
    [InputNumberReference]
  );

  const Substract = useCallback(
    (e) => {
      e.preventDefault();
      InputNumberReference.current.stepUp();
    },
    [InputNumberReference]
  );

  return (
    <InputNumberContainer>
      <DecrementButton onClick={Add}></DecrementButton>
      <Input
        ref={InputNumberReference}
        type="number"
        id={lifeArea}
        name={lifeArea}
        min="1"
        max="10"
        required
        defaultValue="5"
      />
      <IncrementButton onClick={Substract}></IncrementButton>
    </InputNumberContainer>
  );
};

export default InputNumber;
