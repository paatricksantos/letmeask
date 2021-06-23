import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { Room } from './pages/Room/';
import { NewRoom } from './pages/NewRoom';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
