$("#crystals").on("click", ".crystal-image", function() {
    alert("You clicked a crystal!");
});

var targetnumber = 55;
$("#number-to-guess").text(targetNumber);

var counter = 0;
var numberOptions = [10,11];
var increment = numberOptions[Math.round(Math.random())];
$("#crystals").on("click", ".crystal-image", function () {
    counter += 10;
    alert("Your new score is: " + counter);

if (counter === targetNumber) {
    alert("you win!");
}

else if (counter >= targetNumber) {
    alert("you lose!");
}
});