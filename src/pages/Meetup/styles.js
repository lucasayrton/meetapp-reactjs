import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 900px;
`;

export const Banner = styled.img`
  width: 900px;
  height: 400px;
  border-radius: 5px;
  margin-bottom: 35px;
`;

export const Content = styled.div`
  width: 315px;
  
  h1 {
    font-size: 24px;
    margin-bottom: 5px;
  }
  
  span {
    font-size: 14px;
    color: #999;
  }
  
  p {
    font-size: 16px;
    opacity: 0.8;
    line-height: 28px;
    margin-top: 20px;
    margin-bottom: 30px;
    
    &:last-of-type {
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;


export const Button = styled.button`
  background: #e5556e;
  color: #fff;
  width: 100%;
  border-radius: 50px;
  border: 0;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
  font-family: Helvetica, sans-serif;
`;
