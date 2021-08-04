  
import React from 'react';
import { DndProvider } from 'react-dnd';
import GlobalStyle from './styles/global';
import HTML5Backend from 'react-dnd-html5-backend';

import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <DndProvider backend={HTML5Backendlmpl}>
      <Header />
      <Board />
      
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
