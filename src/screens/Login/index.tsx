import React, { useEffect } from 'react';
import { Container, Text, Input } from './styles';
import { connect } from 'react-redux';

export function Login(props) {
  return (
    <Container>
        <Text>Email</Text>
        <Input value={props.email} />
    </Container>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email
  };
};

const LoginConnect = connect(mapStateToProps)(Login);

export default LoginConnect;

