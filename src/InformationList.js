import React from "react";
import { PhoneCall, FacebookProfile } from "./untils/helpers";

const informationList = [
  {
    id: 1,
    infoKey: "Quê Quán",
    value: "Sơn Trà, Đà Nẵng",
  },
  {
    id: 2,
    infoKey: "Nghề Nghiệp",
    value: "Bán iPhone, sale Bđs",
  },
  {
    id: 3,
    infoKey: "Số điện thoại chính",
    value: <PhoneCall number={"0938767560"} />,
  },
  {
    id: 4,
    infoKey: "Số điện thoại phụ",
    value: <PhoneCall number={"0938081632"} />,
  },
  {
    id: 5,
    infoKey: "Facebook 1 Thắng Bất Động Sản",
    value: <FacebookProfile id={"100047357722856"} />,
  },
  {
    id: 6,
    infoKey: "Facebook 2 Thắng Bất Đs",
    value: <FacebookProfile id={"100017218560991"} />,
  },
  {
    id: 7,
    infoKey: "Tài khoản MB Bank",
    value: "0938767560  - Trinh Quang Thang",
  },
  {
    id: 8,
    infoKey: "Tài khoản VCB",
    value: "1012895055 - Trinh Quang Thang",
  },
];

export default informationList;
