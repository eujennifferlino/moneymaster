import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }){
  const labelName = useMemo( () => {
    if(data.tag === 'saldo'){
      return{
        label:'Saldo em conta',
        color:'394363'
      }
    }else if(data.tag === 'receita'){
      return{
        label:'Entradas',
        color:'00B94A'
      }
    }else{
      return{
        label:'Saídas',
        color:'D80000'
      }
    }
  }, [data] )
  
  return(
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>R$ {data.saldo}</Balance>
    </Container>
  )
}