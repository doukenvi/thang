import React from "react";
import styled from "styled-components";
import BioRow from "./BioRow";
import informationList from "../InformationList";

function BioDetail() {
  return (
    <Wrapper>
      {informationList.map((infoItem) => {
        return <BioRow key={infoItem.id} {...infoItem} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 2rem;
`;

export default BioDetail;
