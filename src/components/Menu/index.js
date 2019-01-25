import React from "react";

import { Container, Itens, Item, User } from "./styles";

import Logo from "../../assets/images/logo-white.svg";
import Profile from "../../assets/images/profile.svg";

const Menu = () => (
  <Container>
    <Itens>
      <Item to="/">
        <img src={Logo} alt="Logo" />
      </Item>
      <Item to="/dashboard">Início</Item>
      <Item to="/buscar">Buscar</Item>
      <Item to="/novomeetup">Novo Meetup</Item>
    </Itens>
    <Item to="/perfil">
      <User src={Profile} alt="Profile" />
    </Item>
  </Container>
);

export default Menu;
