import React from 'react';
import { Container, Button, Text } from './styles';


function Home() {
  return (
    <Container>
      <Button>
        <Text>Login</Text>
      </Button>

      <Button>
        <Text>Cadastro</Text>
      </Button>
    </Container>
  )
}

export default Home;

