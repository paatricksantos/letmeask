import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { Room } from './pages/Room/';
import { NewRoom } from './pages/NewRoom';
import { AdminRoom } from './pages/AdminRoom';
import GlobalStyle from './styles/global';
import Rooms from './pages/Rooms';
import { ProtectedRoute } from './helper/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/rooms/new" component={NewRoom} />
          <Route exact path="/rooms" component={Rooms} />
          <ProtectedRoute path="/rooms/:id" component={Room} />
          <ProtectedRoute path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
