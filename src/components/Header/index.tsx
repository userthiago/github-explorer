import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import logoImg from '../../assets/imgs/github_explorer-logo.svg';

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
          <FiChevronLeft size={16} /> Voltar
        </Link>
      )}
    </Container>
  );
};

export default Header;
