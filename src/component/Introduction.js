import React from "react";
import styled from "styled-components";
import { PhoneCall } from "../untils/helpers";
function Introduction() {
  return (
    <Wrapper>
      Trịnh Quang Thắng hay còn dùng các tên giả khác với người xung quanh hoặc
      thậm chí bạn bè xã giao là Ngọc Thắng, Ngọc, Quang,... là tên chuyên lừa
      đảo bán iPhone Lock trên chợ tốt. Ngày xưa hắn bắt đầu công việc ở Đà Nẵng
      là buôn iPhone trên Facebook, sau buôn bán ko thuận lợi hắn ta vào Sg
      chuyển sang làm sale Bất động sản, thường rao bán nhất là những căn hộ ở
      chung cư Đông Hải đường Tô Ký quận 12.
      <br />
      <br />
      Ko rõ tình hình kinh doanh Bds của hắn thế nào nhưng hình như hắn ta thấy
      lừa đảo bán iPhone trên chợ tốt vẫn kiến tiền nhanh hơn làm việc chân
      chính, hắn ta thường xuyên đăng bài bán iPhone Lock trên chợ tốt, với thủ
      đoạn được tính toán kỹ càng, nạn nhân là những người thiếu hiểu biết về
      công nghệ, thiếu hiểu biết về các dòng iPhone Lock/ cách unlock tạm thời
      của iPhone, những người lớn tuổi ít tìm hiểu về điện thoại.
      <br />
      <br />
      Một chiếc điện thoại iPhone 11 Lock có giá rẻ hơn bản Quốc tế khoảng 3
      triệu đồng, nghĩa là với mỗi chiếc iPhone lừa được người khác, hắn thu về
      tiền lãi khoảng 3 triệu, và theo tôi dự đoán dựa trên cách hắn up bài, xóa
      bài, đổi tên account, thì cứ sau 2 ngày hắn bán được một chiếc với tài
      khoản <PhoneCall number={"0938081632"} /> trên chợ tốt
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Introduction;
