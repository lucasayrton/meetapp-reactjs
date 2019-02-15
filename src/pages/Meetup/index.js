import React, {Component} from 'react';

import { Container, Banner, Content, Button } from "./styles";

import reuniao from "../../assets/images/reuniao.jpg"

class Meetup extends Component {
  render() {
    return (
      <Container>
        <Banner src={reuniao} />
        <Content>
          <h1>Meetup React Native</h1>
          <span>120 membros</span>
          <p>O meetup de React Native é um espaço para discutir sobre tecnologias por volta do desenvolvimento web
            utilizando a biblioteca do Facebook para criação de interfaces móveis multiplataforma com Javascript.</p>
          <span>Realizado em: </span>
          <p>Rua Guilherme Gembala, 260, Rio do Sul - SC</p>
          <Button type="submit">Inscreva-se</Button>
        </Content>
      </Container>
    );
  }
}

export default Meetup;
