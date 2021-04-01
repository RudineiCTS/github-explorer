import React from 'react';

import {Title, Form, Repository} from './styled'
import {FiChevronRight} from 'react-icons/fi';
import logo from '../../assets/logo.svg';

const Dashboard:React.FC =()=> {
  return(
    <>
      <img src={logo} alt="Github explorer"/>
      <Title>Explore repositórios no Github</Title>


      <Form>
        <input type="text" placeholder="digite aqui"/>
        <button>Pesquisar</button>
      </Form>

      <Repository>
        <a href="#">
          <img src="https://avatars.githubusercontent.com/u/47544016?v=4" alt="image Dev"/>
          <div>
          <strong>GitHub-explorer\bootcamp</strong>
            <p>Projeto desenvolvido para treinamento em react</p>
          </div>

          <FiChevronRight/>
        </a>

        <a href="#">
          <img src="https://avatars.githubusercontent.com/u/47544016?v=4" alt="image Dev"/>
          <div>
          <strong>GitHub-explorer\bootcamp</strong>
            <p>Projeto desenvolvido para treinamento em react</p>
          </div>

          <FiChevronRight/>
        </a>
      </Repository>
    </>
  )
}
export default  Dashboard;
