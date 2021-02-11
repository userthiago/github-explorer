import React from 'react';

import arrowRight from '../../assets/imgs/arrow-right.svg';

import { Container } from './styles';

const RepositoryCard: React.FC = () => (
  <Container>
    <img
      className="repository-card__img-profile"
      src="https://avatars.githubusercontent.com/u/37296704?s=460&u=de99263ba5b63909fecb12d6c9d1dc1fcb405216&v=4"
      alt="Imagem do perfil de Thiago Santos"
    />
    <div className="repository-card__info">
      <strong>github_explorer</strong>
      <p>Repositório sobre a aula de ReactJS/Styled Components/Typescript</p>
    </div>
    <img
      className="repository-card__icon"
      src={arrowRight}
      alt="Flecha para a direita"
    />
  </Container>
);

export default RepositoryCard;
