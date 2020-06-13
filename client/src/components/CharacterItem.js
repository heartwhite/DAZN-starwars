import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

import avatar from '../static/profile-avatar.png';

const CardContent = styled(Card.Content)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardHeader = styled(Card.Header)`
  margin-left: 10px;
`;

const CharacterItem = ({ character }) => {
  const { name, id } = character;

  return (
    <Card>
      <Link to={`/character/${id}`}>
        <CardContent>
          <Image floated='left' size='mini' src={avatar} />
          <CardHeader textAlign='center'>{name}</CardHeader>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CharacterItem;
