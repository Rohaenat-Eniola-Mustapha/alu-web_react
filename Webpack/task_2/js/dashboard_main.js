import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
const button = $('<button>Click here to get started</button>').appendTo('body');
const countDisplay = $('<p id="count"></p>').appendTo('body');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;
function updateCounter() {
  count += 1;
  countDisplay.text(`${count} clicks on the button`);
}

button.on('click', _.debounce(updateCounter, 500));