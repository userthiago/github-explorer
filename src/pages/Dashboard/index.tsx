import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Title, Form, Input, Button, RepositoriesList } from './styles';

import logoImg from '../../assets/imgs/github_explorer-logo.svg';
import RepositoryCard from '../../components/RepositoryCard';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github.</Title>

    <Form>
      <Input placeholder="Digite o nome do repositório" />
      <Button type="submit">Pesquisar</Button>
    </Form>

    <RepositoriesList>
      <RepositoryCard />
      <RepositoryCard />
      <RepositoryCard />
      <RepositoryCard />
    </RepositoriesList>
  </>
);

export default Dashboard;
