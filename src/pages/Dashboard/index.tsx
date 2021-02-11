import React, { useState, FormEvent } from 'react';

import RepositoryCard from '../../components/RepositoryCard';
import logoImg from '../../assets/imgs/github_explorer-logo.svg';

import api from '../../services/api';

// eslint-disable-next-line object-curly-newline
import { Title, Form, RepositoriesList } from './styles';
import Input from '../../components/Input';

interface RepositoryData {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);

  const handleSetInputValue = (value: string): void => {
    setInputValue(value);
  };

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    if (!inputValue) {
      setInputError('Digite o autor/nome do repositório');
    } else {
      await api
        .get<RepositoryData>(`repos/${inputValue}`)
        .then((response) => {
          const repository = response.data;
          setRepositories([...repositories, repository]);
          setInputValue('');
          setInputError('');
        })
        .catch(() => {
          setInputError('Erro na busca por esse repositório');
        });

      console.log(inputError);
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form onSubmit={handleAddRepository}>
        <Input
          value={inputValue}
          placeholder="Digite o nome do repositório"
          buttonValue="Pesquisar"
          buttonType="submit"
          functionSetValue={handleSetInputValue}
          errorMessage={inputError}
        />
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
