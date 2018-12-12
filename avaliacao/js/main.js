var customName = document.getElementById('nome');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
var insertx = ["Willy the Goblin",
    "Big Daddy",
    "Father Christmas"];
var inserty = ["the soup kitchen",
    "Disneyland",
    "the White House"];
var insertz = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];


function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;
    var xItem = randomValueFromArray(insertx);
    var yItem = randomValueFromArray(inserty);
    var zItem = randomValueFromArray(inserty);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);



  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14) + " Stone";
    var temperature =  Math.round(((94 * 9)/5)+32) + " Centigrade";

    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}