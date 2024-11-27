// Navbar Variables
var resumeShown = document.getElementById("resume-container");
var portfolioShown = document.getElementById("portfolio-container");
var projectsShown = document.getElementById("projects-container");

// Portfolio Variables
var communicateScreenshotShown = document.getElementById("expanded-project-communicate");
var isekaiScreenshotShown = document.getElementById("expanded-project-isekai");
var gateScreenshotShown = document.getElementById("expanded-project-gate");
var frontendContentShown = document.getElementById("frontend-content");
var gameContentShown = document.getElementById("game-content");
var cloudContentShown = document.getElementById("cloud-content");
var communicateMoreButtonShown = document.getElementById("communicate-screenshot-button");
var isekaiMoreButtonShown = document.getElementById("isekai-screenshot-button");
var gateMoreButtonShown = document.getElementById("gate-screenshot-button");
var communicateLessButtonShown = document.getElementById("communicate-less-button");
var isekaiLessButtonShown = document.getElementById("isekai-less-button");
var gateLessButtonShown = document.getElementById("gate-less-button");





// Color picker variables
var colorPickerShown = document.getElementById("color-picker-box");
var primaryBackgroundColor = document.getElementById("color-picker1");
var secondaryBackgroundColor = document.getElementById("color-picker2");
var tertiaryBackgroundColor = document.getElementById("color-picker3");
var primaryTextColor = document.getElementById("color-picker4");
var secondaryTextColor = document.getElementById("color-picker5");
var tertiaryTextColor = document.getElementById("color-picker6");


// Set Color Picker to defualt values
primaryBackgroundColor.value = "#b4b4b4";
secondaryBackgroundColor.value = "#616161";
tertiaryBackgroundColor.value = "#010a38";
primaryTextColor.value = "#000000";
secondaryTextColor.value = "#b4b4b4";
tertiaryTextColor.value = "#3c3c3c";

// Link Color Picker to root
// Function to update CSS variables
function updateRootColors() {
    document.documentElement.style.setProperty("--background-color1", primaryBackgroundColor.value);
    document.documentElement.style.setProperty("--background-color2", secondaryBackgroundColor.value);
    document.documentElement.style.setProperty("--background-color3", tertiaryBackgroundColor.value);
    document.documentElement.style.setProperty("--text-color1", primaryTextColor.value);
    document.documentElement.style.setProperty("--text-color2", secondaryTextColor.value);
    document.documentElement.style.setProperty("--text-color3", tertiaryTextColor.value);
}

// Update CSS variables to match default values
updateRootColors();

// Add event listeners to color pickers to update the root variables on change
primaryBackgroundColor.addEventListener("input", updateRootColors);
secondaryBackgroundColor.addEventListener("input", updateRootColors);
tertiaryBackgroundColor.addEventListener("input", updateRootColors);
primaryTextColor.addEventListener("input", updateRootColors);
secondaryTextColor.addEventListener("input", updateRootColors);
tertiaryTextColor.addEventListener("input", updateRootColors);

// Hamburger Logic
document.getElementById("hamburger-link").addEventListener("click", function(event){
    event.preventDefault();
    colorPickerShown.hidden = !colorPickerShown.hidden;
});

// Navbar logic
document.getElementById("resume").addEventListener("click", function(event) {
    event.preventDefault();
    resumeShown.hidden = false;
    portfolioShown.hidden = true;
    projectsShown.hidden = true;
});
document.getElementById("portfolio").addEventListener("click", function(event) {
    event.preventDefault();
    resumeShown.hidden = true;
    portfolioShown.hidden = false;
    projectsShown.hidden = true;
});
document.getElementById("projects").addEventListener("click", function(event) {
    event.preventDefault();
    resumeShown.hidden = true;
    portfolioShown.hidden = true;
    projectsShown.hidden = false;
});

// Screenshot logic
document.getElementById("communicate-screenshot-button").addEventListener("click", function(event) {
    event.preventDefault();
    // set the value to the opposite of its current value
    communicateScreenshotShown.hidden = !communicateScreenshotShown.hidden;
    communicateMoreButtonShown.hidden = true;
});
document.getElementById("communicate-less-button").addEventListener("click", function(event) {
    event.preventDefault();
    communicateScreenshotShown.hidden = !communicateScreenshotShown.hidden;
    communicateMoreButtonShown.hidden = false;
});
document.getElementById("isekai-screenshot-button").addEventListener("click", function(event) {
    event.preventDefault();
    // set the value to the opposite of its current value
    isekaiScreenshotShown.hidden = !isekaiScreenshotShown.hidden;
    isekaiMoreButtonShown.hidden = true;
});
document.getElementById("isekai-less-button").addEventListener("click", function(event) {
    event.preventDefault();
    isekaiMoreButtonShown.hidden = false;
    isekaiScreenshotShown.hidden = !isekaiScreenshotShown.hidden;
});
document.getElementById("gate-screenshot-button").addEventListener("click", function(event) {
    event.preventDefault();
    // set the value to the opposite of its current value
    gateScreenshotShown.hidden = !gateScreenshotShown.hidden;
    gateMoreButtonShown.hidden = true;
});
document.getElementById("gate-less-button").addEventListener("click", function(event) {
    event.preventDefault();
    gateMoreButtonShown.hidden = false;
    gateScreenshotShown.hidden = !gateScreenshotShown.hidden;
});

// Portfolio Logic
document.getElementById("content-selection-link-frontend").addEventListener("click", function(event) {
    event.preventDefault();
    frontendContentShown.hidden = !frontendContentShown.hidden;
    gameContentShown.hidden = true;
    cloudContentShown.hidden = true;
});
document.getElementById("content-selection-link-game").addEventListener("click", function(event){
    event.preventDefault();
    gameContentShown.hidden = !gameContentShown.hidden;
    frontendContentShown.hidden = true;
    cloudContentShown.hidden = true;
});
document.getElementById("content-selection-link-cloud").addEventListener("click", function(event){
    event.preventDefault();
    cloudContentShown.hidden = !cloudContentShown.hidden;
    frontendContentShown.hidden = true;
    gameContentShown.hidden = true;
});