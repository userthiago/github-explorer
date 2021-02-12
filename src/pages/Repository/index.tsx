import React from 'react';
// import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';
import RepositoryCard from '../../components/RepositoryCard';

import { UserInfo, RepositoryInfo, RepositoryIssuesList } from './styles';

// interface RepositoryParams {
//   repository: string;
// }

const Repository: React.FC = () => {
  // const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header enableReturn />
      <UserInfo>
        <img
          src="https://avatars.githubusercontent.com/u/37296704?s=460&u=de99263ba5b63909fecb12d6c9d1dc1fcb405216&v=4"
          alt="Imagem do perfil"
        />
        <div className="user__info">
          <strong>thiagosantos/repo</strong>
          <p>Descrição do repo</p>
        </div>
      </UserInfo>
      <RepositoryInfo>
        <div className="info__number">
          <strong>1808</strong>
          <p>Stars</p>
        </div>
        <div className="info__number">
          <strong>48</strong>
          <p>Fork</p>
        </div>
        <div className="info__number">
          <strong>67</strong>
          <p>Issues abertas</p>
        </div>
      </RepositoryInfo>
      <RepositoryIssuesList>
        <RepositoryCard
          repositoryName="Teste"
          repositoryDescription="Teste"
          userName="Teste"
          url="/"
        />
        <RepositoryCard
          repositoryName="Teste"
          repositoryDescription="Teste"
          userName="Teste"
          url="/"
        />
        <RepositoryCard
          repositoryName="Teste"
          repositoryDescription="Teste"
          userName="Teste"
          url="/"
        />
      </RepositoryIssuesList>
    </>
  );
};

export default Repository;
