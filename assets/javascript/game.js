//generate a random number
var targetNumber = Math.floor(Math.random() * 101) + 19;

$("#number").text(targetNumber);

var counter = 0;

function resetGame() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#number").text(targetNumber);

    numberOptions = [Math.floor(Math.random() * 11) + 1,
        Math.floor(Math.random() * 11) + 1,
        Math.floor(Math.random() * 11) + 1,
        Math.floor(Math.random() * 11) + 1
    ];
    for(var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("#crystal" + (i + 1));
        // Each imageCrystal given data attribute (data-crystalValue) equal to array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);


    }

    counter = 0;
    $("#score").text("Score: " + counter);

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

}

//define wins / losses
var wins = 0;
var losses = 0;

// create 4 crystals each with their own unique number value.
var numberOptions = [Math.floor(Math.random() * 11) + 1,
    Math.floor(Math.random() * 11) + 1,
    Math.floor(Math.random() * 11) + 1,
    Math.floor(Math.random() * 11) + 1,
];

// for loop to create crystals for every numberOption.
for(var i = 0; i < numberOptions.length; i++) {

    // For each iteration, create an imageCrystal
    var imageCrystal = $("#crystal" + (i + 1));


    // Each imageCrystal given data attribute (data-crystalValue) equal to array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

}

// Click event applies to every crystal.
$(".crystal").on("click", function() {

    // Extract crystal value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // Add crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // Win-lose logic
    $("#score").text("Score: " + counter);

    if(counter === targetNumber) {
        alert("You win!");
        wins++;
        resetGame();
    }

    else if(counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        resetGame();
    }


});
