import React from 'react';

import { Card, Image } from 'semantic-ui-react';

export default function FilmItem({ film: { title, releaseDate, id }, posterUrl }) {
  const date = new Date(releaseDate).getFullYear();
  return (
    <Card href={`/film/${id}`}>
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
