import React from 'react';

import arrowRight from '../../assets/imgs/arrow-right.svg';

import { Container } from './styles';

interface RepositoryCardData {
  userName: string;
  userProfileImgUrl: string;
  repositoryName: string;
  repositoryDescription: string;
}

const RepositoryCard: React.FC<RepositoryCardData> = ({
  userName,
  userProfileImgUrl,
  repositoryName,
  repositoryDescription,
}) => (
  <Container>
    <img
      className="repository-card__img-profile"
      src={userProfileImgUrl}
      alt={`Imagem do perfil de ${userName}`}
    />
    <div className="repository-card__info">
      <strong>{repositoryName}</strong>
      <p>{repositoryDescription}</p>
    </div>
    <img
      className="repository-card__icon"
      src={arrowRight}
      alt="Flecha para a direita"
    />
  </Container>
);

export default RepositoryCard;
