import React, { useState } from 'react';
import Grid from "../Grid";
import { Container, InputContent, Label, Input, RadioGroup, Button } from './style';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [ desc, setDesc ] = useState("");
  const [ amount, setAmount ] = useState("");
  const [ isExpense, setIsExpense ] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if(!desc || !amount){
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1){
      alert("O valor ter que ser maior que ZERO!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");

  };

  return (
    <>
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
        <Button onClick={handleSave}>ADICIONAR</Button>
      </Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
};

export default Form;
