import React, { useState } from 'react';
import { RegisterContainer, RegisterTypeButton, RegisterLabel } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterTypes({ type, sendTypeChanged }){
  const [typeChecked, setTypeChecked] = useState(type);
  
  function changeType(name){
    if(name === 'receita'){
      setTypeChecked('receita');
      sendTypeChanged('receita');
    }else{
      setTypeChecked('despesa');
      sendTypeChanged('despesa');
    }
  }
  
  return(
    <RegisterContainer>
      <RegisterTypeButton 
        checked={ typeChecked === 'receita' ? true : false } 
        onPress={ () => changeType('receita') }
      >
        <Ionicons name="arrow-up" size={25} color={"#121212"} />
        <RegisterLabel>
          Receita
        </RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton 
        checked={ typeChecked === 'despesa' ? true : false } 
        onPress={ () => changeType('despesa') }
      >
        <Ionicons name="arrow-down" size={25} color={"#121212"} />
        <RegisterLabel>
          Despesa
        </RegisterLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  )
}