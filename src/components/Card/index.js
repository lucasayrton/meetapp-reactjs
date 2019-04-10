import React from "react";

import { Container, Img, Content, InfosContent, Button } from "./styles";

import imagem from "../../assets/images/meetup.jpg"
import rightArrow from '../../assets/images/right-arrow.svg'

const Card = () => (
  <Container>
    <Img src={imagem} />
    <Content>
      <InfosContent>
        <p>Meetup React Native</p>
        <span>150 membros</span>
      </InfosContent>
      <Button to="/meetup/1">
        <img src={rightArrow}  alt="Meetup"/>
      </Button>
    </Content>
  </Container>
);

export default Card;
