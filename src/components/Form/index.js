import React, { useState } from 'react'
import { Container, InputContent, Label, Input, RadioGroup, Button } from './style';

export const Form = () => {
  const [ desc, setDesc ] = useState("");
  const [ amount, setAmount ] = useState("");
  const [ isExpense, setIsExpense ] = useState(false);

  const handleSave = () => {
    if(!desc || !amount){
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1){
      alert("O valor ter que ser maior que ZERO!");
      return;
    }
  }

  return (
    <Container>
      <InputContent>
        <Label>Descrição</Label>
        <Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
      </InputContent>
      <InputContent>
        <Label>Valor</Label>
        <Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)}/>
      </InputContent>
      <RadioGroup>
        <Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setIsExpense(!isExpense)}/> 
        <Label htmlFor="rIncome">  Entrada</Label>
        <Input type="radio" id="rExpense" name="group1" onChange={() => setIsExpense(!isExpense)}/> 
        <Label htmlFor="rExpense">  Saída</Label>
      </RadioGroup>
      <Button oncLick={handleSave}>ADICIONAR</Button>
    </Container>
  )
}
