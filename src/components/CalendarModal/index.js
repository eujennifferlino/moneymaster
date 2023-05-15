import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { 
  Container, 
  ButtonFilterText,
  ModalContent,
  ButtonFilter
} from './styles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }){
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDate, setMarkedDate] = useState({});
  
  function handleOnDayPress(date){
    setDateNow(new Date(date.dateString));

    let markedDay = {};
    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#394363',
      textColor: '#FFF'
    }

    setMarkedDate(markedDay);
  }

  function handleFilterDate(){
    handleFilter(dateNow);
    setVisible();
  }

  return(
    <Container>
      <TouchableWithoutFeedback onPress={setVisible} >
        <View style={{ flex:1 }}></View>
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markedDate}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#D80000',
            selectedDayBackgroundColor: '#007FFF',
            selectedDayTextColor: '#FFF'
          }}
        />
        <ButtonFilter onPress={handleFilterDate} >
          <ButtonFilterText>Filtrar data</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  )
}