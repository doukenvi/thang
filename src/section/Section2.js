import React, { useState } from "react";
import image from "../images/section2/tin_nhan_ham_doa.png";
import styled from "styled-components";
import Figure from "../component/Figure";
import { PhoneCall } from "../untils/helpers";

export const HamDoa = () => {
  return (
    <Wrapper>
      Vì tôi đã biết stk Ngân Hàng của hắn nên sau khi mua bán hắn ngay lập tức
      lấy sđt chính <PhoneCall number={"0938767560"} /> chặn tôi.
      <br />
      Số điện thoại còn lại dùng để giao dịch thì hắn chưa chặn ngay nhưng ko
      bắt máy. Mù kiến thức về các dòng iPhone Lock, tôi lo lắng đem điện thoại
      ra tiệm thì được thợ báo giá 400k để hack tạm thời gọi điện được, chưa thể
      biết hack kiểu đó sóng sánh có ổn định ko, và sẽ bị Apple fix bất cứ lúc
      nào
      <br />
      <br />
      Khi tôi tìm được Facebook của hắn, hỏi han bạn bè của hắn xem hắn đang
      sống ở đâu thì hôm sau hắn nhắn tin cho tôi tỏ vẻ quan biết giang hồ, và
      sẽ thanh toán tôi nếu dám tìm hắn
      <Figure src={image} caption={"tin nhắn hăm dọa hắn gửi tôi"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  img {
    width: 100%;
  }
`;
