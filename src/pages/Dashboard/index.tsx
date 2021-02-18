/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, FormEvent, useEffect } from 'react';

import RepositoryCard from '../../components/RepositoryCard';
import InputField from '../../components/InputField';
import Header from '../../components/Header';

import api from '../../services/api';

import * as S from './styles';

import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

interface RepositoryData {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
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
  const [removeRepository, setRemoveRepository] = useState(false);
  const [removeListRepository, setRemoveListRepository] = useState<number[]>(
    [],
  );
  const [
    selectedRepositoriesForRemove,
    setSelectedRepositoriesForRemove,
  ] = useState(0);

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleSetInputValue = (value: string): void => {
    setInputValue(value);
  };

  const handleSetRemoveRepository = (): void => {
    if (removeRepository) {
      setRemoveRepository(false);
      setSelectedRepositoriesForRemove(0);
      setRemoveListRepository([]);
    } else {
      setRemoveRepository(true);
    }
  };

  const handleRemoveRepositoriesFromList = (): void => {
    if (removeRepository) {
      const newListRepositories: RepositoryData[] = [];
      setRemoveRepository(false);
      repositories.forEach((item, index) => {
        if (!removeListRepository.some((removeItem) => removeItem === index)) {
          newListRepositories.push(item);
        }
      });
      setRepositories(newListRepositories);
    }
    setSelectedRepositoriesForRemove(0);
    setRemoveListRepository([]);
  };

  const handleSetItemInRemoveList = (index: number): void => {
    const list = removeListRepository;
    if (list.some((item) => item === index)) {
      list.splice(list.indexOf(index), 1);
      setSelectedRepositoriesForRemove(selectedRepositoriesForRemove - 1);
    } else {
      list.push(index);
      setSelectedRepositoriesForRemove(selectedRepositoriesForRemove + 1);
    }
    setRemoveListRepository(list);
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
      <S.Title>Explore repositórios no Github.</S.Title>
      <S.Form onSubmit={handleAddRepository}>
        <InputField
          value={inputValue}
          placeholder="Digite o nome do repositório"
          buttonValue="Pesquisar"
          loading={loading}
          functionSetValue={handleSetInputValue}
          errorMessage={inputError}
        />
      </S.Form>
      <S.RepositoryMenu enable={removeRepository}>
        {repositories.length > 0 && (
          <>
            <div className="remove__change-area">
              <Button onClick={handleRemoveRepositoriesFromList}>
                Remover
              </Button>
              <span>
                {selectedRepositoriesForRemove} repositório(s) selecionado(s)
              </span>
            </div>
            <Checkbox
              checked={removeRepository}
              onChange={handleSetRemoveRepository}
            >
              Remover repositório(s)
            </Checkbox>
          </>
        )}
      </S.RepositoryMenu>
      <S.RepositoriesList>
        {repositories.map((repository, index) => {
          return (
            <RepositoryCard
              key={repository.full_name}
              repositoryName={repository.full_name}
              repositoryDescription={repository.description}
              userName={repository.owner.login}
              userProfileImgUrl={repository.owner.avatar_url}
              url={`/repository/${repository.full_name}`}
              position={index}
              enableRemove={removeRepository}
              removeFunction={handleSetItemInRemoveList}
            />
          );
        })}
      </S.RepositoriesList>
    </>
  );
};

export default Dashboard;
