import React from "react";
import styled from "styled-components";

function Figure({ src, caption, alt = caption }) {
  return (
    <Wrapper>
      <a href={src} alt={alt} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} />
      </a>
      <figcaption>{caption}</figcaption>
    </Wrapper>
  );
}
const Wrapper = styled.figure`
  width: 100%;
  text-align: center;
  font-style: italic;
  font-size: small;
  text-indent: 0;
  margin: 0.5rem;
  padding: 0.5rem;
  img {
    width: 100%;
  }
`;
export default Figure;
