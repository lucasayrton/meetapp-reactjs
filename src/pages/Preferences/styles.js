import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 315px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 14px;
`;

export const Text = styled.span`
  font-size: 16px;
  opacity: 0.8;
  line-height: 28px;
  text-align: left;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 6px;
`;

export const Label = styled.label`
  display: flex;
  position: relative;
  margin-bottom: 14px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;
  align-items: center;

  div {
    width: 20px;
    height: 20px;
    background: #514c56;
    border-radius: 5px;
    margin-right: 10px;

    &:hover {
      background: #999;
    }
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${Label} > div {
    background: #e5556e;
  }
`;

export const TextCheckbox = styled.span`
  font-size: 18px;
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
  margin-top: 25px;
`;
