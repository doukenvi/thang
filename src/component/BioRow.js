import React from "react";
import styled from "styled-components";

function BioRow({ infoKey, value }) {
  return (
    <Wrapper>
      <p>{infoKey} </p>
      <p>:&nbsp;</p>
      {value}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr min-content 3fr;
  align-content: center;
  .social-icon {
    font-size: 1.5rem;
    margin-bottom: -0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

export default BioRow;
