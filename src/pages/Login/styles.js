import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;

  img {
    margin-bottom: 25px;
  }
`;

export const Form = styled.form`
  padding: 5px;
  margin: 20px 0 0;
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background: transparent;
  color: #fff;
  border: 0;
  font-size: 20px;
  margin-bottom: 40px;
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
`;

export const Text = styled(Link)`
  font-size: 16px;
  opacity: 0.6;
  text-decoration: none;
  color: #fff;
`;
