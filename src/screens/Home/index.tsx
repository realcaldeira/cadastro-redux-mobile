import React from 'react';
import { Container, Button, Text } from './styles';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Button
        onPress={()=> navigation.navigate("Login")}
      >
        <Text>Login</Text>
      </Button>

      <Button
        onPress={()=> navigation.navigate("Cadastro")}
      >
        <Text>Cadastro</Text>
      </Button>
    </Container>
  )
}

export default Home;

