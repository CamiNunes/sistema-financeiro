import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #27272a;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;
  color: #a8a29e;
  padding: 1rem;
  
  @media (max-width: 750px) {
    width:20%;

    span{
      font-size: 1rem;
    }

    svg{
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;

  svg{
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1.5rem;
`;

export const Total = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;