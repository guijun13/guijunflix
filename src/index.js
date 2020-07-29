import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route exact path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => (<div>Error 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);