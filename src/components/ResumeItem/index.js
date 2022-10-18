import React from 'react'
import { Container, Header, HeaderTitle, Total } from './style';

export const ResumeItem = ({ title, Icon, value }) => {
  return (
    <Container >
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </Header>
      <Total>R$ {value}</Total>
    </Container>

  )
}
