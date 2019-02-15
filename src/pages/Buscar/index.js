import React, {Component} from 'react';

import Card from "../../components/Card";
import { Container, Title, Section, Search } from "./styles";

class Buscar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Search>
            <input placeholder="Buscar meetups" />
          </Search>
          <Title>Inscrições</Title>
          <Section>
            <Card />
            <Card />
            <Card />
          </Section>
          <Title>Próximos meetups</Title>
          <Section>
            <Card />
            <Card />
            <Card />
          </Section>
          <Title>Recomendados</Title>
          <Section>
            <Card />
            <Card />
            <Card />
          </Section>
        </Container>
      </div>
    );
  }
}

export default Buscar;
