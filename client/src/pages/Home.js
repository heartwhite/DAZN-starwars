import React from 'react';

import FilmBox from '../components/FilmBox';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/2880px-Star_wars2.svg.png'
        alt='starwars logo'
        width='150px'
        className='logo'
      />
      <SearchBar />
      <FilmBox />
    </>
  );
};

export default Home;
