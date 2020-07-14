import React from 'react';

import { Container, Avatar, Info, FullowButton } from './style';

interface Props {
    name: string;
    nickname: string;
}
const FullowSuggestion: React.FC<Props> = ({
    name,
    nickname
}) => {
  return (
      <Container>
          <div>
              <Avatar />
                <Info>
                <strong>{name}</strong>
                <span>{nickname}</span>
                </Info>
          </div>

          <FullowButton outlined>Seguir</FullowButton>
      </Container>
  );
}

export default FullowSuggestion;