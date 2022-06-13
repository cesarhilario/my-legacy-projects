import React from 'react';

import Container from '../../components/Container';
import Message from '../../components/Message';
import Button from '../../components/Button';

const Screen1 = ({ navigation }) => {
  function handleNavigation(screen) {
    navigation.navigate(screen)
  }
  
  return(
    <Container>
      <Message screen="2A" />
      <Button label="Voltar para a tela 1" handler={() => handleNavigation('Tela-1A')} />
      <Button label="Ir para a tela 3" handler={() => handleNavigation('Tela-3A')} />
    </Container>
  )
}

export default Screen1;