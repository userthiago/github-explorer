import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

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
    <FiChevronRight className="repository-card__icon" size={24} />
  </Container>
);

export default RepositoryCard;
