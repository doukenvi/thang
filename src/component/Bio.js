import React from "react";
import styled from "styled-components";
import ImageGallery from "./ImageGallery";
import { importAll } from "../untils/helpers";
import BioDetail from "./BioDetail";
import NameBox from "./NameBox";

function Bio() {
  const images = importAll(require.context("../images/slider", true));
  return (
    <Wrapper>
      <NameBox />
      <ImageGallery images={images} />
      <BioDetail />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default Bio;
