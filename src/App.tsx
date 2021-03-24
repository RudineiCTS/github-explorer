import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './Routes/index';

import GlobalStyled from './styles/globalStyled';

const App: React.FC = ()=> (
  <>
    <BrowserRouter>
      <Routes/>
   </BrowserRouter>
  <GlobalStyled/>
  </>
)

export default App;
