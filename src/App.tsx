import { FC } from 'react';
import { Container, Divider, Flex } from '@chakra-ui/react';

import Header from './components/UI/Header/Header';
import Toolbar from './components/Toolbar/Toolbar';
import Main from './components/Main/Main';
import Frame from './components/Frame/Frame';

const App: FC = () => {
  return (
    <Container
      padding='0'
      margin='0'
      minW='full'
      minH='full'
    >
      <Header />
      <Flex>
        <Toolbar />
        <Divider
          orientation='vertical'
          opacity='1'
          borderWidth='1px'
          minH='100vh'
          color='#E4E6F1'
        />
        <Main />
        <Frame />
      </Flex>
    </Container>
  )
}

export default App;
