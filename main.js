$(document).ready(function() {
	console.log("linked");

var $theBody = $('body');
var $paraGraph = $('p');
var $complimentsButton = $('#complimentButton');
var compliments = [
  'Your hair looks so dreamy and luxurious and never fried. Kind of like a mermaid\'s',
  'You deserve multiple glasses of wine today.',
  'You look great today.',
  'Have another glass of wine.',
  'You\'re more fun than bubble wrap.',
  'You would make even Ugg Boots look great.',
  'If you were a box of crayons, you\'d be the giant name-brand one with the built-in sharpener.',
  'You could survive a Zombie apocalypse.',
  'Who raised you? They deserve a medal for a job well done.',
  'Actions speak louder than words, and yours tell an incredible story.',
  'In high school I bet you were voted "most likely to keep being awesome."',
  'Babies and small animals probably love you.',
  'Has anyone ever told you that you have great posture?',
];


var colors = ['#33CCFF', '#6699FF', '#66FF99', '#CC3399', '#FF99CC'];

var getRandomIndex = function (array) {
 return Math.floor(Math.random() * (array.length));
};

var changeColor = function() {
$theBody.css('background-color', colors[getRandomIndex(colors)]);
}

$complimentsButton.on('click', function () {
	var newCompliment = compliments[getRandomIndex(compliments)];
	$paraGraph.text(newCompliment)
	changeColor()
});


});