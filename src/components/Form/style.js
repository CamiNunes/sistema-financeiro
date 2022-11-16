import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #27272a;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  border-radius: 5px;
  gap: 10px;
  
  @media (max-width: 750px) {
    display: none;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const Label = styled.label`
  color: #a3a3a3;
  padding-bottom: 2px;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #18181b;
  width: 100%;
  background-color: #f5f5f4 ;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  
  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: #a8a29e;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #075985;
`;