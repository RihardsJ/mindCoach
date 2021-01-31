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
  outline: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  position: absolute;
  width: 12px;
  height: 12px;
  left: 35px;
  top: 12px;
  border-style: solid;
  border-width: 1px 1px 0 0;
  border-color: var(--black);
  transform: rotate(45deg);

  &:hover {
    left: 38px;
  }
`;

const DecrementButton = styled(IncrementButton)`
  left: -15px;
  top: 12px;
  border-width: 0 0 1px 1px;
  transform: rotate(45deg);

  &:hover {
    left: -18px;
  }
`;

const InputNumber = ({ lifeArea, ref, formData }) => {
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
        autoComplete="off"
        defaultValue={formData.formData[lifeArea][0] * 10}
      />
      <IncrementButton onClick={Substract}></IncrementButton>
    </InputNumberContainer>
  );
};

export default InputNumber;
