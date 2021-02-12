import React from 'react';

import arrowRight from '../../assets/icons/arrow-right.svg';

import { Container } from './styles';

interface RepositoryCardData {
  userName: string;
  userProfileImgUrl: string;
  repositoryName: string;
  repositoryDescription: string;
  url: string;
}

const RepositoryCard: React.FC<RepositoryCardData> = ({
  userName,
  userProfileImgUrl,
  repositoryName,
  repositoryDescription,
  url,
}) => (
  <Container to={url}>
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
