import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
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

export const SelectImage = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed #787878 2px;
  margin-bottom: 30px;
  
  input {
    opacity: 0.0;
    width: 100%;
    height:100%;
  }
  
  p {
    position: absolute;
  }
  
  img {
    position: absolute;
    height: 20px;
    width: 20px;
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
  margin-top: 30px;
`;

export const Label = styled.label`
  display: flex;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
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

export const InputCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${Label} > div {
    background: #e5556e;
  }
`;
