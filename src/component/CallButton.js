import React from "react";
import styled from "styled-components";
import { FaPhoneSquareAlt } from "react-icons/fa";

const CallButton = () => {
  return <Wrapper>gọi ngay&nbsp;</Wrapper>;
};

const Wrapper = styled.div`
  background-color: var(--clr-purple);
  color: white;
  display: inline-block;
  margin: 0 0.2rem;
  padding: 0%.5rem;
  border-radius: 5px;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem grey;
`;
export default CallButton;
