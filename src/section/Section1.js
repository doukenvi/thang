import React, { useState } from "react";
import image from "../images/section1_thudoan/tin_ban_iPhone.png";
import styled from "styled-components";
import Figure from "../component/Figure";

export const Thudoan = () => {
  return (
    <Wrapper>
      <p className="para-title">Đăng bài bán iPhone QT giá tốt</p>
      <p>
        Hắn ta thường xuyên dùng sđt{" "}
        <span className="emphasize-red">0938081632</span> lên chợ tốt đăng tin
        bán iPhone Quốc tế. Đối với iPhone 11 tôi mua phải, hắn để giá thấp hơn
        iPhone quốc tế khoảng 500 nghìn đồng để dễ dụ con mồi.
      </p>
      <Figure
        src={image}
        caption={
          "ảnh chụp tin đăng chợ tốt qua cache (lưu trữ tạm) của google, bài đăng gốc đã bị xóa"
        }
      />
      <p className="para-title">Địa điểm thường là nơi công cộng</p>
      <p>
        Khi có người gọi đến, hắn thường hẹn ra những nơi công cộng như dưới
        sảnh chung cư nào đó, mục đích để người khác tin rằng hắn làm việc hoặc
        sinh sống trong chung cư đó. Đối với tôi hắn hẹn ra chung cư Tô Ký quận
        12 <br />
        <br />
        <p className="para-title">Luôn tục hối thúc khiến nạn nhân vội vã</p>
        <p>
          Vừa tới gặp tôi hắn đã giả vờ có cuộc gọi khác gọi hỏi mua đúng chiếc
          iPhone đó, hắn ta trả lời điện thoại rất to mục đích để tôi nghe thấy
        </p>
        <br />
        <span className="quote">
          "À anh muốn mua iPhone em đăng hả? Anh là cò lái hồi nãy gọi em trước
          phải ko? Điện thoại của em đang có anh này xem, nếu anh này ko mua em
          để cho anh nhé"
        </span>
        <br />
        &gt; Đây là chiêu trò tâm lý khiến khách vội vã muốn mua chiếc iPhone
        này kẻo có người khác mua mất
      </p>
      <br />
      Khi tôi ngồi kiểm tra máy, hắn ta liên tục luyên thuyên về việc mình làm
      cho công ty bds, làm trong chung cư Tô Ký, và hối tôi kiểm tra nhanh vì
      hắn còn phải đi làm.
      <br />
      <p className="para-title">Nút thắt khiến nạn nhân bị lừa</p>
      <p>
        Trước khi đem bán, hắn đã hack để chiếc iPhone lock đó gọi điện được,
        nhưng chỉ cần reset máy thì sẽ mất tính năng đó, vì trước đó hắn là dân
        buôn bán iPhone nên việc này hắn khá thành thạo. <br /> Khi tôi vừa
        reset máy về cài đặt gốc, hắn ta vội giật máy lại và rút sim điện thoại
        ra. Lúc đó tôi cũng thắc mắc ko hiểu hắn ta làm vậy để làm gì. Lúc mua
        về mới hiểu là vì đấy là máy Lock, reset xong bỏ sim vào nó sẽ báo lỗi
        ko nhận. Nếu vẫn để sim điện thoại trong máy thì tôi sẽ thấy lỗi ngay
        nên hắn mới vội tháo ra. Mấu chốt là ở chỗ này khiến tôi và một số người
        đã bị lừa vì thiếu kiến thức về các dòng iPhone Lock. <br />{" "}
      </p>
      <br />
      Tôi đã được nghe một số người kể lại, trường hợp trên nếu bạn đòi gắn sim
      vào test lần nữa thì hắn sẽ giật máy chạy đi ngay. Rất tiếc là tôi ko đủ
      thông minh và tỉnh táo để làm như vậy
      <p className="para-title">Muốn được thanh toán bằng tiền mặt</p>
      Khi thanh toán tiền hắn liên tục hỏi tôi có tiền mặt ko, may mắn là tôi
      thực sự ko có nên hắn đã phải đưa tôi stk Ngân Hàng, nhờ vậy mà sau khi
      mua tôi có cơ sở tìm ra thông tin về hắn <br />
      Chủ tài khoản: <span className="emphasize-red">
        Trinh Quang Thang
      </span>{" "}
      <br />
      Số tài khoản: <span className="emphasize-red">0938767560</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  img {
    width: 100%;
  }
`;
