import React, { MouseEvent, useEffect, useState } from 'react';

import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface UrlData {
  pathname: string;
}

interface RepositoryCardData {
  userName?: string;
  userProfileImgUrl?: string;
  repositoryName: string;
  repositoryDescription: string;
  url: string | UrlData;
  target?: string;
  position: number;
  enableRemove?: boolean;
  removeFunction?: (index: number) => void;
}

const RepositoryCard: React.FC<RepositoryCardData> = ({
  userName = '',
  userProfileImgUrl,
  repositoryName,
  repositoryDescription,
  url,
  target,
  position,
  enableRemove = false,
  removeFunction,
}) => {
  const [willBeRemove, setWillBeRemove] = useState(false);

  const handleRemove = (e: MouseEvent<HTMLAnchorElement>): void => {
    if (enableRemove && removeFunction) {
      e.preventDefault();
      setWillBeRemove(!willBeRemove);
      removeFunction(position);
    }
  };

  useEffect(() => {
    setWillBeRemove(false);
  }, [enableRemove]);

  return (
    <Container
      to={url}
      target={target}
      position={position}
      enableRemove={enableRemove}
      willBeRemove={willBeRemove}
      onClick={handleRemove}
    >
      {userProfileImgUrl && (
        <img
          className="repository-card__img-profile"
          src={userProfileImgUrl}
          alt={`Imagem do perfil de ${userName}`}
        />
      )}
      <div className="repository-card__info">
        <strong>{repositoryName}</strong>
        <p>{repositoryDescription}</p>
      </div>
      <FiChevronRight className="repository-card__icon" size={24} />
    </Container>
  );
};

export default RepositoryCard;
