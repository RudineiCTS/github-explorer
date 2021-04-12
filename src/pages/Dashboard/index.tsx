import React, { FormEvent, useState } from 'react';

import {Title, Form, Repository} from './styled'
import {FiChevronRight} from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import api from '../../services/api';

interface Repositories{
  full_name: string;
  description:string;
  owner:{
    login: string;
    avatar_url:string;
  }
}


const Dashboard:React.FC =()=> {
  const [newRepo, setNewRepo]= useState('');
  const [repositories, setRespositories] = useState<Repositories[]>([]);

  async function handleAddRepository
  (event: FormEvent<HTMLFormElement>): Promise<void>{

    event.preventDefault();

    const response = await api.get<Repositories>(`repos/${newRepo}`);
    const repository = response.data;

    setRespositories([...repositories, repository]);
    console.log(repositories);
  }
  return(
    <>
      <img src={logo} alt="Github explorer"/>
      <Title>Explore repositórios no Github</Title>


      <Form
        onSubmit={handleAddRepository}
      >
        <input
        type="text"
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="digite aqui"/>
        <button>Pesquisar</button>
      </Form>

      <Repository>
        {repositories.map(repository => (

            <a
            key={repository.full_name}
            href="#">
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <div>
            <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight/>
          </a>

          )
        )}
      </Repository>
    </>
  )
}
export default  Dashboard;
