import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { persist, store } from './store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <DndProvider backend={HTML5Backend}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </DndProvider>
    </PersistGate>
  </Provider>
);

