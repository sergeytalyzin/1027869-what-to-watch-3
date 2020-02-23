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
  src: `img/mindhunter.jpg`,
  genre: `Comedy`,
  date: 1812,
};


const mockEvent = {
  preventDefault() {}
};

it(`when pointing to a card information is sent to the handler`, ()=>{
  const handleMouseEnter = jest.fn();
  const smallMovieCard = shallow(<SmallMovieCard
    handleMouseEnter={handleMouseEnter}
    film={data}/>);

  const card = smallMovieCard.find(`.small-movie-card`);

  card.simulate(`mouseenter`, mockEvent);


  expect(handleMouseEnter).toBeCalledWith(`Mindhunter`);

});


