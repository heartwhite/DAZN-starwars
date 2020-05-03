import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

import avatar from '../static/profile-avatar.png';

const CharacterItem = ({ character }) => {
  const { name, id } = character;

  return (
    <Card>
      <Link to={`/character/${id}`}>
        <Card.Content>
          <Image floated='left' size='mini' src={avatar} />
          <Card.Header textAlign='center'>{name}</Card.Header>
        </Card.Content>
      </Link>
    </Card>
  );
};

export default CharacterItem;
