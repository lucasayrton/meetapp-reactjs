import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #e5556e;
`;

export const Itens = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const Item = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  margin-left: 30px;
  text-decoration: none;
  color: #fff;
`;

export const User = styled.img`
  margin-right: 30px;
  width: 20px;
  height: 20px;
`;
