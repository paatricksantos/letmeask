import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route exact path="/" component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
