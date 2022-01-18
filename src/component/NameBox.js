import React from "react";
import styled from "styled-components";

function NameBox() {
  return (
    <Wrapper>
      <div className="namebox-subtitle">
        <div className="strike"></div>
        <div>
          &nbsp;Kẻ lừa đảo trên&nbsp;
          <div className="logo-box">
            <img
              src="https://static.chotot.com/storage/default/transparent_logo.webp"
              alt="logo"
            />
          </div>
          &nbsp;
        </div>
        <div className="strike"></div>
      </div>
      <div className="name-box">
        <h2>Trịnh Quang Thắng</h2>
      </div>
      <p className="subTitle">
        (Tên giả:&nbsp;
        <span className="sub-name">Ngọc Thắng, Ngọc, Quang,...</span>)
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .logo-box {
    background-color: #ffba00;
    display: inline-block;
    padding: 0.1rem 0.3rem;
    line-height: 1;
    img {
      height: 1.2rem;
      margin-bottom: -0.15rem;
    }
  }
  display: grid;
  grid-template-rows: 3;
  justify-content: center;
  justify-items: center;
  text-align: center;
  margin-bottom: 1rem;
  .namebox-subtitle {
    width: 80%;
    margin-bottom: 0.2rem;
    color: red;
    color: var(--clr-red-special);
    font-weight: bold;
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    div {
    }
  }
  .strike {
    background-color: currentColor;
    height: 1px;
    width: 100%;
  }
  .name-box {
    margin-top: -0.5rem;
  }
  h2 {
    color: var(--clr-primary-1);
    margin-bottom: 0.2rem;
  }
  .subTitle {
    font-size: 1rem;
    margin-bottom: 0.2rem;

    .sub-name {
      color: var(--clr-red-special);
    }
  }
`;

export default NameBox;
