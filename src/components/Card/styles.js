import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  width: 310px;
  height: 220px;
  padding: 10px 10px;
`;

export const Img = styled.img`
  width: 290px;
  height: 115px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Content = styled.div`
  background: #fff;
  height: 85px;
  margin-top: -4px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfosContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 20px;
  
  p {
    font-size: 16px;
    color: #222;
    max-width: 220px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  span {
    font-size: 14px;
    color: #999;
  }
`;

export const Button = styled(Link)`
  height: 40px;
  width: 40px;
  margin-right: 20px;
  border-radius: 50%;
  background: #e5556e;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    height: 15px;
    width: 15px;
  }
`;
