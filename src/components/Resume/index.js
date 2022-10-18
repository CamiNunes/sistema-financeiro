import React from 'react'
import { Container } from './style';
import { ResumeItem } from './../ResumeItem/index';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa';

export function Resume() {
  return (
    <Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="5000"/>
      <ResumeItem title="Saidas" Icon={FaRegArrowAltCircleDown} value="500"/>
      <ResumeItem title="Total" Icon={FaDollarSign} value="4500"/>
    </Container>
  )
}