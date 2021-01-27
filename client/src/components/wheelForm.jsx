import { useState } from "react";
import styled from "styled-components";
import createSlicesForPolarChart from "../utils/polarChart";
import { PencilButton } from "./buttons";
import InputNumber from "./inputNumber";

const FieldSet = styled.fieldset`
  border-style: none;
  display: flex;
  justify-content: space-between;
`;

const ColourDot = styled.div`
  margin-top: 10px;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${(props) => `var(--${props.colour})`};
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-right: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--sand);
  border-radius: 6px;
  padding: 0 10px 10px 10px;
  margin: 20px 0;
  width: 80%;
  max-width: 300px;
  box-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.5),
    -1px -1px 1px hsla(0, 100%, 100%, 0.25);
`;

// {
//     Money: [0.7, "green"],
//     Friends: [0.5, "yellow"],
//     Health: [0.5, "blue"],
//     Family: [0.7, "orange"],
//     Spirituality: [0.5, "cyan"],
//     Love: [0.5, "red"],
//     Career: [0.5, "green"],
//     Fun: [0.2, "sand"],
//   }

const buildForm = ({ formData }) => {
  return Object.keys(formData).map((lifeArea, i) => (
    <FieldSet id={lifeArea} key={i}>
      <ColourDot colour={formData[lifeArea][1]} />
      <Label htmlFor={lifeArea}>{lifeArea}</Label>
      <InputNumber lifeArea={lifeArea} />
    </FieldSet>
  ));
};

const wheelForm = ({ formData }) => {
  return (
    <Form>
      {buildForm(formData)}
      <PencilButton type="submit">Draw</PencilButton>
    </Form>
  );
};

export default wheelForm;
