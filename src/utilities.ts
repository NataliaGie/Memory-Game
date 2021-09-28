import panda from './images/panda.jpg';
import dog from './images/dog.jpg';
import flamingo from './images/flamingo.jpg';
import giraffe from './images/giraffe.jpg';
import iguana from './images/iguana.jpg';
import jaguar from './images/jaguar.jpg';

export const animals = [
    { img: panda, name: 'panda', flipped: false, matched: false, id: 1},
    { img: dog, name: 'dog', flipped: false, matched: false, id: 2},
    { img: flamingo, name: 'flamingo', flipped: false, matched: false, id: 3},
    { img: giraffe, name: 'giraffe', flipped: false, matched: false, id: 4},
    { img: jaguar, name: 'jaguar', flipped: false, matched: false, id: 5},
    { img: iguana, name: 'iguana', flipped: false, matched: false, id: 6},
    { img: panda, name: 'panda', flipped: false, matched: false, id: 7},
    { img: dog, name: 'dog', flipped: false, matched: false, id: 8},
    { img: flamingo, name: 'flamingo', flipped: false, matched: false, id: 9},
    { img: giraffe, name: 'giraffe', flipped: false, matched: false, id: 10},
    { img: jaguar, name: 'jaguar', flipped: false, matched: false, id: 12},
    { img: iguana, name: 'iguana', flipped: false, matched: false, id: 11}
  ];

  // Durstenfeld shuffle algorithm implementation
  export const shuffleCards = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
      return array;
    };