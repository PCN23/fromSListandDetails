import { findById } from '../utils.js';
import { stadiums } from '../stadiums.js';

const params = new URLSearchParams(window.location.search);
//console.log(params.get('id'));

const stadium = findById(params.get('id'), stadiums);
//console.log('stadium');

const stadiumName = document.getElementById('stadium-name');
const img = document.getElementById('img');
const places = document.getElementById('place');

stadiumName.textContent = stadium.name;
places.textContent = stadium.place;
img.src = `../assets/${stadium.image}`;