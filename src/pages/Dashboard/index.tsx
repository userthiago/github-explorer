/* eslint-disable implicit-arrow-linebreak */
import React, { useState, FormEvent, useEffect } from 'react';

import RepositoryCard from '../../components/RepositoryCard';
import InputField from '../../components/InputField';
import Header from '../../components/Header';

import api from '../../services/api';

import { Title, Form, RepositoriesList } from './styles';

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
  const [repositories, setRepositories] = useState<RepositoryData[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleSetInputValue = (value: string): void => {
    setInputValue(value);
  };

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    if (!inputValue) {
      setInputError('Digite o autor/nome do repositório');
    } else if (
      repositories.some(
        (repository) =>
          repository.full_name.toUpperCase() === inputValue.toUpperCase(),
      )
    ) {
      setInputError('O repositório já está na lista');
    } else {
      setLoading(true);
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <>
      <Header />
      <Title>Explore repositórios no Github.</Title>

      <Form onSubmit={handleAddRepository}>
        <InputField
          value={inputValue}
          placeholder="Digite o nome do repositório"
          buttonValue="Pesquisar"
          loading={loading}
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
              url={`/repository/${repository.full_name}`}
            />
          );
        })}
      </RepositoriesList>
    </>
  );
};

export default Dashboard;
