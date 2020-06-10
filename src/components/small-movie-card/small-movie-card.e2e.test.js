import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";

configure({
  adapter: new Adapter()
});

const data = {
  id: Math.random(),
  title: `Mindhunter`,
  src: `somePath`,
  genre: `Comedy`,
  date: 1812,
  previewVideoLink: `somePath`,
};


const mockEvent = {
  preventDefault() {}
};

it(`when pointing to a card information is sent to the handler`, ()=>{
  const onTitleClick = jest.fn();
  const smallMovieCard = shallow(<SmallMovieCard
    onActiveFilm={onTitleClick}
    film={data}
    handleClickItem={()=>{}}
    active={{}}
  />);

  const card = smallMovieCard.find(`.small-movie-card`);
  card.simulate(`click`, mockEvent);
  expect(card.length).toEqual(1);
});


