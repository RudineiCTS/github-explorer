import React, { FormEvent, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import {Title, Form, Repository, Error} from './styled'
import {FiChevronRight} from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import api from '../../services/api';

interface Repositories {
  full_name: string;
  description:string;
  owner:{
    login: string;
    avatar_url:string;
  }
}


const Dashboard:React.FC =()=> {
  const [inputError, setInputError] =useState('')
  const [newRepo, setNewRepo]= useState('');
  const [repositories, setRespositories] = useState<Repositories[]>(()=>{
    const storageRepository = localStorage.getItem('@GithubExplorer');

    if(storageRepository){
      return JSON.parse(storageRepository);
    }else{
      return [];
    }
  });


  useEffect(()=>{
    localStorage.setItem('@GithubExplorer', JSON.stringify(repositories))
  },[repositories])

  async function handleAddRepository
  (event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();

    if(!newRepo){
      setInputError('Digite um repositório')
      return;
    }
    try{
      const response = await api.get<Repositories>(`repos/${newRepo}`);
      const repository = response.data;

      setRespositories([...repositories, repository]);
      //se tudo correr corretamente, iremos setar para 0 os dois campos
      setNewRepo('');
      setInputError('');
    }catch(err){
      setInputError(err.message);
    }
  }
  return(
    <>
      <img src={logo} alt="Github explorer"/>
      <Title>Explore repositórios no Github</Title>


      <Form
        onSubmit={handleAddRepository}
        hasError={!!inputError}
      >
        <input
        type="text"
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="digite aqui"/>
        <button>Pesquisar</button>
      </Form>

      {/* caso houver algum erro, ira adicionar esse componente na corpo do html */}
      {inputError && <Error>{inputError}</Error>}

      <Repository>
        {repositories.map(repository => (

            <Link
            key={repository.full_name}
            to= {`/repositories/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <div>
            <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight/>
          </Link>

          )
        )}
      </Repository>
    </>
  )
}
export default  Dashboard;
