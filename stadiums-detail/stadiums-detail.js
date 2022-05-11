import { findById } from '../utils.js';
import { stadiums } from '../stadiums.js';

const params = new URLSearchParams(window.location.search);

const stadium = findById(params.get('id'), stadiums);

const stadiumName = document.getElementById('stadium-name');
const img = document.getElementById('img');
const seats = document.getElementById('capacity');

stadiumName.textContent = stadium.name;
seats.textContent = 
img.src = `../assets/${stadium}.jpg`;