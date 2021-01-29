import styled from "styled-components";
import { SubmitButton } from "./buttons";
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

const WheelForm = ({ formData, component }) => {
  const InputElements = ({ formData }) => {
    const data = formData.formData;
    return Object.keys(data).map((lifeArea, i) => (
      <FieldSet key={i}>
        <ColourDot colour={data[lifeArea][1]} />
        <Label htmlFor={lifeArea}>{lifeArea}</Label>
        <InputNumber lifeArea={lifeArea} formData={formData} />
      </FieldSet>
    ));
  };

  const updateFormDataAndShowPolarChart = (e) => {
    e.preventDefault();
    const data = formData.formData;

    Object.keys(data).forEach((key) => {
      formData.setFormData((prevData) => ({
        ...prevData,
        [key]: [
          Number((e.target.elements[key].value * 0.1).toFixed(1)),
          prevData[key][1],
        ],
      }));
    });
    component.setComponentName("PolarChart");
    console.log(data);
  };

  return (
    <Form onSubmit={updateFormDataAndShowPolarChart}>
      <InputElements formData={formData} />
      <SubmitButton />
    </Form>
  );
};

export default WheelForm;
