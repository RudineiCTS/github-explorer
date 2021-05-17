import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import {Header, RepositoryInfo, Issues} from './styles'


type RepositoryParams ={
  repository: string,
}


const Repository:React.FC =()=> {
  const {params}= useRouteMatch<RepositoryParams>();
  // console.log(params)
  return(
    <>
      <Header>
        <img src={logo}/>
        <Link to='/'>
          <FiChevronLeft
            size={16}
          />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://cdn.falauniversidades.com.br/wp-content/uploads/2020/10/13111828/One-Piece-dublado-na-Netflix.jpg" alt=""/>
          <div>
            <strong>nome do repo</strong>
            <p>descrição do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>47</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link
            to= {'#'}>
            <div>
            <strong>Nome do repositório</strong>
              <p>Descrição</p>
            </div>
            <FiChevronRight/>
          </Link>
      </Issues>
   </>
  )
}
export default  Repository;
