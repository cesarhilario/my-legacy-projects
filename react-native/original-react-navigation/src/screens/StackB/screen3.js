import React from "react";

import Container from "../../components/Container";
import Message from "../../components/Message";
import Button from "../../components/Button";

const Screen1 = ({ navigation }) => {
  function handleNavigation(screen) {
    navigation.navigate(screen);
  }

  return (
    <Container>
      <Message screen="3B" />
      <Button
        label="Voltar para a tela 2"
        handler={() => handleNavigation("Tela-2B")}
      />
    </Container>
  );
};

export default Screen1;
