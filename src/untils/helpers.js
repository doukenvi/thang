import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";

export const importAll = (folder) => {
  let images = [];
  folder.keys().forEach((filePath) => {
    const path = folder(filePath);
    images.push(path);
  });
  return images;
};

export const PhoneCall = ({ number = "" }) => {
  return (
    <Wrapper>
      <div>
        {number}
        <a href={`tel:${number}`} type="tel">
          <button className="small-button">Gọi ngay</button>
        </a>
      </div>
    </Wrapper>
  );
};

export const FacebookProfile = ({ id = "" }) => {
  return (
    <Wrapper>
      <div className="info-box">
        <a href={"https://www.facebook.com/profile.php?id=" + id}>Link web</a>
        <span>&nbsp;hoặc&nbsp;</span>
        <a href={"fb://profile/" + id}>
          <span>Mở qua app&nbsp;</span>
          <FaFacebook className="social-icon">FaFacebook</FaFacebook>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  .social-icon {
    font-size: 1.5rem;
    margin-bottom: -0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`;
