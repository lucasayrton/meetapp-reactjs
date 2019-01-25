import React from "react";

import { Container, Form, Title, Input, Button, Text } from "./styles";
import Logo from "../../assets/images/logo.svg";

const Cadastrar = cadastrar => (
  <Container>
    <Form onSubmit={cadastrar}>
      <img src={Logo} alt="Logo" />
      <Title>Nome</Title>
      <Input type="text" placeholder="Digite seu nome" />
      <Title>Email</Title>
      <Input type="text" placeholder="Digite seu e-mail" />
      <Title>Senha</Title>
      <Input type="text" placeholder="Sua senha secreta" />
      <Button type="submit">Criar conta</Button>
    </Form>
    <Text to="/">Já tenho conta</Text>
  </Container>
);

export default Cadastrar;
