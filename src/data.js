import React, { useState } from "react";
import { Thudoan } from "./section/Section1";
import { HamDoa } from "./section/Section2";
import { BangChung } from "./section/Section3";
import { BaiHoc } from "./section/Section4";

const questions = [
  {
    id: 1,
    title: "Chiêu thức lừa đảo tinh vi",
    info: <Thudoan />,
  },
  {
    id: 2,
    title: "Chặn số, hăm dọa",
    info: <HamDoa />,
  },
  {
    id: 3,
    title: "Bằng chứng",
    info: <BangChung />,
  },
  {
    id: 4,
    title: "Kết luận và bài học",
    info: <BaiHoc />,
  },
];
export default questions;
