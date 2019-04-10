import React, {Component} from 'react';

import {
  Container,
  Form,
  Title,
  Input,
  Button,
  InputCheckbox,
  Label,
  SelectImage,
  File
} from "./styles";

import photoIcon from "../../assets/images/photo-camera.svg";

class NovoMeetup extends Component {
  state = {
    imageName: ""
  };

  handleSetImage = async (e) => {
    await this.setState({ imageName: e.target.files[0].name });
    console.log(this.state.imageName)
  };

  render() {
    return (
      <Container>
        <Form>
          <Title>Título</Title>
          <Input type="text" placeholder="Digite o título do meetup" />
          <Title>Descrição</Title>
          <Input type="text" placeholder="Descreva seu meetup" />

          <Title>Imagem</Title>
          <SelectImage type="text" >
            {this.state.imageName ? <p>{this.state.imageName}</p> : <img src={photoIcon} alt="Imagem"/>}
            <input type="file" onChange={this.handleSetImage} />
          </SelectImage>

          <Title>Localização</Title>
          <Input type="text" placeholder="Onde seu meetup irá acontecer?" />

          <Title>Tema do meetup</Title>
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
  }
}

export default NovoMeetup;
