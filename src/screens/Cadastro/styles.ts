import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;



export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  background-color: grey;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
`;

export const Text = styled.Text`
  color: black;
  font-size: 24px;
`;


export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 10%;
  background-color: red;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px; 
`;