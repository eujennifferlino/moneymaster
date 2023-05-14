import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import { Background, ListBalance, Area, Title, List } from './styles';
import api from '../../services/api';
import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import HistoryList from '../../components/HistoryList';
import { Ionicons } from '@expo/vector-icons';

export default function Home(){
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date())

  useEffect(() =>{
    let isActive = true;

    async function getMovements(){
      let dateFormated = format(dateMovements, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params:{
          date:dateFormated
        }
      })

      const balance = await api.get('/balance', {
        params:{
          date:dateFormated
        }
      })

      if(isActive){
        setMovements(receives.data);
        setListBalance(balance.data);
      }

    }
    getMovements();

    return () => isActive = false;

  }, [isFocused, dateMovements])
  
  async function handleDeleteRegister(id){
    try{
      await api.delete('/receives/delete', {
        params:{
          item_id: id
        }
      })
      setDateMovements(new Date())
    }catch(err){
      console.log(err);
    }
  }

  return(
    <Background>
      <Header title="Movimentações" />

      <ListBalance 
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.tag }
        renderItem={ ({ item }) => ( <BalanceItem data={item} /> ) }
      />

      <Area>
        <TouchableOpacity>
          <Ionicons name="calendar" size={30} color="#121212" />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => <HistoryList data={item} deleteItem={handleDeleteRegister} /> }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

    </Background>
  )
}