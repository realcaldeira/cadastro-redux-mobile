import React from 'react';
import { Container, Text, Input } from './styles';
import { connect } from 'react-redux';
import { editEmail } from '../../actions/AuthActions';

export function Login(props) {
  return (
    <Container>
        <Text>Email</Text>
        <Input 
          value={props.email} 
          onChangeText={(texto)=> props.editEmail(texto)}
        />
    </Container>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email
  };
};

const LoginConnect = connect(mapStateToProps, { editEmail })(Login);

export default LoginConnect;

