import styled from "styled-components";

// Title

const H1 = styled.h1`
  text-align: center;
  font-weight: 100;
  font-size: 2.8rem;
  margin: 0;
  text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.5);
`;

const OrangeFont = styled.span`
  color: var(--orange);
`;

const GreenFont = styled.span`
  color: var(--green);
`;

const RedFont = styled.span`
  color: var(--red);
`;

const Title = () => {
  return (
    <H1>
      <OrangeFont>Wheel</OrangeFont> <GreenFont>of</GreenFont>{" "}
      <RedFont>Life</RedFont>
    </H1>
  );
};

// WhiteBoard

const WhiteBoard = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 85%;
  max-width: 750px;
  background-color: var(--white);
  margin-right: auto;
  margin-left: auto;
  box-shadow: 5px 5px 7px hsla(0, 0%, 0%, 0.25);
`;

export { Title, WhiteBoard };
