// import functions and grab DOM elements
import { stadiums } from './stadiums.js';
import { renderStadiumLi } from './utils.js';

const stadiumLinks = document.getElementById('stadium-links');

// let state
for (let stadium of stadiums) {
    const li = renderStadiumLi(stadium);
    stadiumLinks.append(li);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
