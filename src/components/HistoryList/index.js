import React from 'react';
import { Container, TextType, Type, IconView, TextValue } from './styles';
import { TouchableWithoutFeedback, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HistoryList({ data, deleteItem }){
  function handleDeleteItem(){
    Alert.alert(
      'Atenção',
      'Tem certeza que deseja excluir esse registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }
  
  return(
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Type>
          <IconView tipo={data.type} >
            <Ionicons 
              name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up' }
              size={20} 
              color={"#FFF"} 
            />
            <TextType>{data.type}</TextType>
          </IconView>
        </Type>

        <TextValue>
          R$ {data.value}
        </TextValue>
      </Container>
    </TouchableWithoutFeedback>
  )
}