import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:  #F0F4FF;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`;

export const TextType = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-style: italic;
`;

export const Type = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#D80000' : '#00B94A' };
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 6px;
  margin-bottom: 5px;
`;

export const TextValue = styled.Text`
  color: #121212;
  font-size: 20px;
`;