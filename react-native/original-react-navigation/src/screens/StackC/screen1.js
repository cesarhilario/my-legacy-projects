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
      <Message screen="1C" />
      <Button
        label="Ir para a tela 2"
        handler={() => handleNavigation("Tela-2C")}
      />
    </Container>
  );
};

export default Screen1;
