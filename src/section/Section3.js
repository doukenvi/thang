import React, { useState } from "react";
import image from "../images/section3/chuyen_tien.jpg";
import image2 from "../images/section3/tin_ban_iPhone.png";
import styled from "styled-components";
import Figure from "../component/Figure";
import { PhoneCall } from "../untils/helpers";

export const BangChung = () => {
  return (
    <Wrapper>
      <Figure src={image} caption={"Bằng chứng chuyển tiền"} />
      <Figure src={image2} caption={"Tin đăng bán iPhone mà tôi đã mua"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  img {
    width: 100%;
  }
`;
