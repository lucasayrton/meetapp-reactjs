import styled from "styled-components";

import SearchIcon from "../../assets/images/search.svg";

export const Container = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 930px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 14px 15px 14px 35px;
  background: #2f2d38 url(${SearchIcon}) no-repeat 13px center;

  input {
    flex: 1;
    font-size: 15px;
    color: #8e8e93;
    border: 0;
    background: #2f2d38;
    font-family: Helvetica, sans-serif;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
