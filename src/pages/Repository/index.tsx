import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header enableReturn />
      <h1>Repository: {params.repository}</h1>
    </>
  );
};

export default Repository;
