import React from 'react';

import FilmBox from '../components/FilmBox';
import Search from '../components/Search';

const Home = () => {
  return (
    <div>
      <Search />
      <FilmBox />
    </div>
  );
};

export default Home;
