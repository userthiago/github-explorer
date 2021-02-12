import React from 'react';

import logoImg from '../../assets/imgs/github_explorer-logo.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';

import { Container, Link } from './styles';

interface HeaderData {
  enableReturn?: boolean;
  returnLink?: string;
}

const Header: React.FC<HeaderData> = ({
  enableReturn = false,
  returnLink = '/',
}) => {
  return (
    <Container>
      <img src={logoImg} alt="Github Explorer" />
      {enableReturn && (
        <Link to={returnLink}>
          <img src={arrowLeft} alt="Voltar" /> Voltar
        </Link>
      )}
    </Container>
  );
};

export default Header;
