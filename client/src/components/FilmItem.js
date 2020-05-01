import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';

export default function FilmItem({ film: { title, releaseDate, id }, posterUrl }) {
  const [direction, redirect] = useState(null);
  const date = new Date(releaseDate).getFullYear();
  if (direction) {
    return <Redirect to={`/film/${id}`} />;
  }
  return (
    <Card onClick={() => redirect(id)}>
      <Card.Content>
        <Image floated='left' size='small' src={posterUrl} />
        <Card.Header>
          <h2>{title}</h2>
        </Card.Header>
        <Card.Meta>Released at {date}</Card.Meta>
      </Card.Content>
    </Card>
  );
}
