import { Input, Item, Card, Image } from 'semantic-ui-react';

import styled from 'styled-components';

//App

export const AppPage = styled.div`
  font-size: 20px;
  font-family: Verdana;
  margin: auto;
  padding-top: 30px;
  width: 80%;
  @media screen and (max-width: 850px) {
    width: 95%;
  }
`;

//SearchBar

export const SearchInput = styled(Input)`
  margin-bottom: 35px;
`;
export const Icon = styled.i`
  background-color: rgb(255, 65, 90);
`;

// FilmDetails

export const StyledItem = styled(Item)`
  text-align: left;
`;
export const CharactersButton = styled(Item.Header)`
  font-size: 24px;
  margin: 12px;
  cursor: pointer;
`;

export const CharactersList = styled(Card.Group)`
  @media screen and (max-width: 700px) {
    margin-top: 10px !important;
  }
`;
export const MovieInfoText = styled.p`
  font-size: 24px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  height: auto;
`;

//CharacterCard

export const ActorCard = styled(Card)`
  flex-direction: row !important;
  width: 100% !important;
  @media screen and (max-width: 700px) {
    flex-direction: column !important;
  }
`;

export const CardContent = styled(Card.Content)`
  @media screen and (max-width: 700px) {
    flex-direction: column !important;
  }
`;

export const CharacterImage = styled(Image)`
  max-height: 350px;
  @media screen and (max-width: 700px) {
    align-self: center !important;
  }
`;

export const ActorPrimaryInfo = styled(Card.Content)`
  min-width: 150px;
  max-width: 250px;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    align-self: center !important;
  }
`;

export const ActorMovies = styled(Card.Content)`
  @media screen and (max-width: 700px) {
    align-self: center !important;
  }
`;

// BackButton

export const ButtonText = styled.p`
  color: black;
  text-align: left;
  margin-bottom: 35px;
`;

// module.exports = {
//   ButtonText,
//   ActorCard,
//   ActorMovies,
//   ActorPrimaryInfo,
//   CardContent,
//   CharacterImage,
//   CharactersButton,
//   CharactersList,
//   MovieInfoText,
//   PageContainer,
//   StyledItem,
//   SearchInput,
//   Icon,
// };
