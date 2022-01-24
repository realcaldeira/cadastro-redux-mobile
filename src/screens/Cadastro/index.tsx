import React from 'react';
import { Container, Text, Input } from './styles';
import { connect } from 'react-redux'; 

function Cadastro(props) {
  return (
    <Container>
        <Text>Email</Text>
        <Input value={props.email} />
    </Container>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
    senha: auth.senha
  }
}

const CadastroConnect = connect(mapStateToProps)(Cadastro)

export default CadastroConnect;

