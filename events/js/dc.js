/**
 * This is a js file to colorize the branch coordinators of the evens
 */

var colors = [
    "dc-red",
    "dc-blue",
    "dc-green",
    "dc-purple",
    "dc-yellow",
    "dc-orange",
];

(function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
})(colors);

for (var i = 0; i < document.getElementsByClassName('dc-card-event-page').length; i++) {
    document.getElementsByClassName('dc-card-event-page')[i].classList.add(colors[i]);
}