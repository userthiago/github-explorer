import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import RepositoryCard from '../../components/RepositoryCard';

import { UserInfo, RepositoryInfo, RepositoryIssuesList } from './styles';

interface RepositoryParams {
  repository: string;
}

interface RepositoryData {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<RepositoryData | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });
    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header enableReturn />
      {repository && (
        <>
          <UserInfo>
            <img
              src={repository.owner.avatar_url}
              alt={`Imagem do perfil de ${repository.owner.login}`}
            />
            <div className="user__info">
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </UserInfo>
          <RepositoryInfo>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <p>Fork</p>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>Issues abertas</p>
            </li>
          </RepositoryInfo>
        </>
      )}
      <RepositoryIssuesList>
        {issues.map((issue, index) => {
          return (
            <RepositoryCard
              key={issue.id}
              repositoryName={issue.title}
              repositoryDescription={issue.user.login}
              url={{
                pathname: issue.html_url,
              }}
              target="_blank"
              position={index}
            />
          );
        })}
      </RepositoryIssuesList>
    </>
  );
};

export default Repository;
