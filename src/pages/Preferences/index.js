import React from "react";

import {
  Container,
  Content,
  Title,
  Text,
  Subtitle,
  Input,
  Button,
  Label
} from "./styles";

const Preferences = () => (
  <Container>
    <Content>
      <Title>Olá, Nome</Title>
      <Text>
        Parece que é seu primeiro acesso por aqui, comece escolhendo algumas
        preferências para selecionarmos os melhores meetups pra você:
      </Text>
      <Subtitle>Preferências</Subtitle>
      <form action="">
        <Input type="checkbox" id="input" value="Front-end" />
        <Label for="input">
          <div />
          Front-end
        </Label>
        <Input type="checkbox" id="input2" value="Front-end" />
        <Label for="input2">
          <div />
          Back-end
        </Label>
        <Input type="checkbox" id="input3" value="Front-end" />
        <Label for="input3">
          <div />
          Mobile
        </Label>
        <Button>Continuar</Button>
      </form>
    </Content>
  </Container>
);

export default Preferences;
