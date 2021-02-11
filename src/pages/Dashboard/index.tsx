import React, { useState, FormEvent } from 'react';

import RepositoryCard from '../../components/RepositoryCard';
import logoImg from '../../assets/imgs/github_explorer-logo.svg';

// import api from '../../services/api';

// eslint-disable-next-line object-curly-newline
import { Title, Form, Input, Button, RepositoriesList } from './styles';
import api from '../../services/api';

interface RepositoryData {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    await api.get<RepositoryData>(`repos/${newRepo}`).then((response) => {
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
    });
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form onSubmit={handleAddRepository}>
        <Input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <Button type="submit">Pesquisar</Button>
      </Form>

      <RepositoriesList>
        {repositories.map((repository) => {
          return (
            <RepositoryCard
              key={repository.full_name}
              repositoryName={repository.full_name}
              repositoryDescription={repository.description}
              userName={repository.owner.login}
              userProfileImgUrl={repository.owner.avatar_url}
            />
          );
        })}
      </RepositoriesList>
    </>
  );
};

export default Dashboard;
