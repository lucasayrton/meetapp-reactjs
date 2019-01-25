import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Menu from "./components/Menu";

import { Wrapper } from "./styles/components";

import Routes from "./routes";

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Wrapper>
        <Menu />
        <Routes />
      </Wrapper>
    </BrowserRouter>
  </>
);

export default App;
