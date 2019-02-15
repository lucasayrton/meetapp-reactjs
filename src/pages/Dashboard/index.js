import React from "react";

import Card from "../../components/Card";

import { Container, Title, Section } from "./styles";

const Dashboard = () => (
  <Container>
    <Title>Inscrições</Title>
    <Section>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Section>
    <Title>Próximos meetups</Title>
    <Section>
      <Card />
      <Card />
      <Card />
      <Card />
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
);

export default Dashboard;
