const RatingDescription = [
  `Bad`,
  `Normal`,
  `Good`,
  `Very good`,
  `Awesome`
];

const Description = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const DetailsNames = [
  `Frank Sinatra`, `John Mason`, `Anthony Mann`, `Bred Pitt`, `Heinz Herald`, `Richard Weil`, `Anne Wigton`,
  `Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`
];

const getRandomRating = (min, max) => {
  return Number((min + (max - min) * Math.random()).toFixed(2));
};

const getRandomArray = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

const getRandomNumber = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
};

const getRandomDescription = () => {
  let count = getRandomNumber(1, 3);
  let Desc = ``;

  for (let i = 0; i < count; i++) {
    Desc = Desc + Description[getRandomNumber(0, Description.length - 1)];
  }
  return Desc;
};
const generateListNames = (names) => {
  return names.filter(() => Math.random() > 0.5);
};

let id = 1;

export default [
  {
    id: id++,
    title: `Mindhunter`,
    src: `img/mindhunter.jpg`,
    genre: `Comedies`,
    date: 1812,
    posterBig: `img/mindhunter.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: `1h 39m`,
  },
  {
    id: id++,
    title: `Midnight Special`,
    src: `img/midnight-special.jpg`,
    genre: `Romance`,
    date: 1812,
    posterBig: `img/midnight-special.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: `1h 19m`,
  },
  {
    id: id++,
    title: `War of the Worlds`,
    src: `img/war-of-the-worlds.jpg`,
    genre: `Sci-Fi`,
    date: 1812,
    posterBig: `img/midnight-special.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: `2h 32m`,
  },
  {
    id: id++,
    title: `Dardjeeling Limited`,
    src: `img/dardjeeling-limited.jpg`,
    genre: `Crime`,
    date: 1812,
    posterBig: `img/dardjeeling-limited.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: `1h 10m`,
  },
  {
    id: id++,
    title: `Orlando`,
    src: `img/orlando.jpg`,
    genre: `Crime`,
    date: 1812,
    posterBig: `img/orlando.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: `2h 50m`,
  },
  {
    id: id++,
    title: `Seven Years in Tibet`,
    src: `img/seven-years-in-tibet.jpg`,
    genre: `Dramas`,
    date: 1812,
    posterBig: `img/seven-years-in-tibet.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: `2h 05m`,
  },
  {
    id: id++,
    title: `Moonrise Kingdom`,
    src: `img/moonrise-kingdom.jpg`,
    genre: `Dramas`,
    date: 1812,
    posterBig: `img/moonrise-kingdom.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: `1h 50m`,
  },
  {
    id: id++,
    title: `Snatch`,
    src: `img/snatch.jpg`,
    genre: `Dramas`,
    date: 1812,
    posterBig: `img/snatch.jpg`,
    rating: getRandomRating(0, 10),
    ratingLevel: getRandomArray(RatingDescription),
    ratingCount: getRandomNumber(0, 1000),
    description: getRandomDescription(),
    actors: new Set(generateListNames(DetailsNames)),
    director: getRandomArray(DetailsNames),
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: `1h 30m`,
  }
];
