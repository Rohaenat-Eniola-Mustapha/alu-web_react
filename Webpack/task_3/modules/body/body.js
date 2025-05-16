import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
const button = $('<button>Click here to get started</button>').appendTo('body');
const countDisplay = $('<p id="count"></p>').appendTo('body');

let count = 0;
function updateCounter() {
  count += 1;
  countDisplay.text(`${count} clicks on the button`);
}

button.on('click', _.debounce(updateCounter, 500));