import React, { useState } from "react";
import image from "../images/section3/chuyen_tien.jpg";
import styled from "styled-components";
import Figure from "../component/Figure";
import { PhoneCall } from "../untils/helpers";

export const BaiHoc = () => {
  return (
    <Wrapper>
      <p>
        Tôi thừa nhận bản thân ko có tay nghề kiểm tra điện thoại cũ nên mới bị
        lừa mua phải con iPhone Lock này. Tuy nhiên ko vì thế mà tôi bài trừ
        việc mua đồ cũ. Vì trước đó tôi cũng đã từng mua nhiều laptop, đồ điện
        tử, bàn ghế cũ khác trên chợ tốt và gặp phải người bán thật thà tốt bụng
        nên tôi nên tôi đã đỡ tốn rất nhiều tiền và vẫn được dùng đồ tốt. Là một
        sinh viên mới ra trường tiết kiệm được đồng nào hay đồng đó. Chiếc
        iPhone này là người nhà tôi nhờ mua hộ chứ thực ra tôi đang dùng con
        điện thoại cũ giá chỉ 1tr5. Mua hộ đem về phải con iPhone Lock tôi rất
        ngại với người thân vì đã gửi gắm niềm tin vào mình
      </p>
      <br /> <br />
      Nay tôi lập trang web này để chia sẻ câu chuyện cho ai chưa biết thì đừng
      bị lừa như tôi, đồng thời vạch mặt kẻ gian là tên Trịnh Quang Thắng đã làm
      ảnh hưởng đến bao người, cả người mua và những người bán đồ cũ nhưng tốt
      đã bị một con sâu làm rầu nồi canh
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  img {
    width: 100%;
  }
`;
