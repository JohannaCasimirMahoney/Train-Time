// Initialize Firebase
var config = {
    apiKey: "AIzaSyDvykLCbp29Q9QOj7Mk9b1Lt5hsVQ01qXQ",
    authDomain: "train-time-30a29.firebaseapp.com",
    databaseURL: "https://train-time-30a29.firebaseio.com",
    projectId: "train-time-30a29",
    storageBucket: "train-time-30a29.appspot.com",
    messagingSenderId: "854771979450"
};
firebase.initializeApp(config);

// Variable helps to reference the database
var database = firebase.database();

// Establish the current time
var currentTime = moment().format();

// Logs the current time
console.log("Current Time: " + currentTime);


// Clicking submit calls getData function
$("#click-button").on("click", function () {
    event.preventDefault();
    // Takes user input
    var trainNameForm = $("#trainNameForm").val().trim();
    var destinationForm = $("#destinationForm").val().trim();
    var trainTimeForm = moment($("#trainTimeForm").val().trim(), "HH:mm").format("HH:mm");

    //	  var frequencyForm = moment($("#frequencyForm").val().trim().format("mm"));
    var frequencyForm = $("#frequencyForm").val().trim();

    // Creates local object for holding inputs
    var newTrain = {
        train: trainNameForm,
        destination: destinationForm,
        first: trainTimeForm,
        frequency: frequencyForm
    };

    //Setting the new values in the database
    database.ref().push(newTrain);

    //Console.logging to make sure the new data has been stored to the database
    console.log(newTrain.train);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

    //Clearing the inputs
    $("#trainNameForm").val("");
    $("#destinationForm").val("");
    $("#trainTimeForm").val("");
    $("#frequencyForm").val("");
});

//Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().train;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().first;
    var trainFrequency = childSnapshot.val().frequency;

    //Variable to figure out the converted train time
    var trainTimeConverted = moment(trainTime, "HH:mm");

    //Declaring a time difference variable
    var timeDifference = moment().diff(moment(trainTimeConverted), "minutes");
    console.log(timeDifference);

    var frequencyMinutes = childSnapshot.val().frequency;
    console.log("Frequency Minutes: " + frequencyMinutes);

    var minutesAway = Math.abs(timeDifference % frequencyMinutes);
    console.log("Minutes Away: " + minutesAway);

    var nextArrival = moment(currentTime).add(minutesAway, "minutes").format("hh:mm A");
    console.log("Next Arrival: " + nextArrival);


    //Adding into the table
    $("#trainScheduleTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");
});

// jQuery

// var randomDate = "02/23/1999";
// var randomFormat = "MM/DD/YYYY";
// var convertedDate = moment(randomDate, randomFormat);

// // Console.log to confirm the code changes worked.
// console.log(convertedDate.format("MM/DD/YY"));
// console.log(convertedDate.format("MM Do, YYYY hh:mm:ss"));
// console.log(convertedDate.format("X"));
// console.log("----------------------------------------");

// // Determines the time in years, months, days between today and the randomDate

// console.log(convertedDated.toNow());
// console.log(convertedDate.diff(moment(), "years"));
// console.log(convertedDate.diff(moment(), "months"));
// console.log(convertedDate.diff(moment(), "days"));
// console.log("----------------------------------------");

// // Determines the number of days between the randomDate and 02/14/2001

// var newDate = moment("02/14/2001", randomFormat);
// console.log(convertedDate.diff(newDate, "days"));

// // Converts the randomDate to unix time 

// console.log(convertedDate.format("X"));
// console.log("----------------------------------------");

// // Determines what day of the week and what week of the year this randomDate falls on.

// console.log(convertedDate.format("DDD"));
// console.log(convertedDate.format("dddd"));