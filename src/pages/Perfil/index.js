import React from "react";

import {
  Container,
  Form,
  Title,
  Input,
  Button,
  InputCheckbox,
  Name,
  Label
} from "./styles";

const Perfil = cadastrar => (
  <Container>
    <Form onSubmit={cadastrar}>
      <Title>Nome</Title>
      <Name>Lucas Ayrton Marchi Soares</Name>
      <Title>Senha</Title>
      <Input type="password" placeholder="Sua senha secreta" />
      <Title>Confirmação de senha</Title>
      <Input type="password" placeholder="Sua senha secreta" />

      <InputCheckbox type="checkbox" id="input" value="Front-end" />
      <Label for="input">
        <div />
        Front-end
      </Label>
      <InputCheckbox type="checkbox" id="input2" value="Front-end" />
      <Label for="input2">
        <div />
        Back-end
      </Label>
      <InputCheckbox type="checkbox" id="input3" value="Front-end" />
      <Label for="input3">
        <div />
        Mobile
      </Label>

      <Button type="submit">Salvar</Button>
    </Form>
  </Container>
);

export default Perfil;
