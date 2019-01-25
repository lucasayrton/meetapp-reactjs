import React from "react";

import { Container, Form, Title, Input, Button, Text } from "./styles";
import Logo from "../../assets/images/logo.svg";

const Login = login => (
  <Container>
    <Form onSubmit={login}>
      <img src={Logo} alt="Logo" />
      <Title>Email</Title>
      <Input type="text" placeholder="Digite seu e-mail" />
      <Title>Senha</Title>
      <Input type="text" placeholder="Sua senha secreta" />
      <Button type="submit">Entrar</Button>
    </Form>
    <Text to="/cadastrar">Criar conta grátis</Text>
  </Container>
);

export default Login;
