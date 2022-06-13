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
      <Message screen="2B" />
      <Button label="Voltar para a tela 1" handler={() => handleNavigation('Tela-1B')} />
      <Button label="Ir para a tela 3" handler={() => handleNavigation('Tela-3B')} />
    </Container>
  )
}

export default Screen1;