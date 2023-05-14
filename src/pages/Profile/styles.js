import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F0F4FF;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
`;

export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 14px;
  color: #121212;
`;

export const NewLink = styled.TouchableOpacity`
  background-color: #394363;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: 'transparent';
  border-color: #D80000;
  border-width: 2px;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #D80000;
`;