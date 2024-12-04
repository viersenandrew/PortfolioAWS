// Navbar Variables
var resumeShown = document.getElementById("resume-container");
var portfolioShown = document.getElementById("portfolio-container");
var projectsShown = document.getElementById("projects-container");

// Resume Variables
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

// Portfolio Variables






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


var personalWebsiteReturnShown = document.getElementById("return-content-button-proj1item1");
var personalWebsiteShown = document.getElementById("frontend-project1-item1");

var onlineStorefrontReturnShown = document.getElementById("return-content-button-proj1item2");
var onlineStorefrontWebsiteShown = document.getElementById("frontend-project1-item2");

var thirdReturnShown = document.getElementById("return-content-button-proj1item3")
var thirdWebsiteShown = document.getElementById("frontend-project1-item3");
// Frontend Portfolio Logic
document.getElementById("first-website-button").addEventListener("click", function(event) {
    event.preventDefault();
    personalWebsiteShown.hidden = !personalWebsiteShown.hidden;
    personalWebsiteReturnShown.hidden = !personalWebsiteReturnShown.hidden;
});
document.getElementById("return-content-button-proj1item1").addEventListener("click", function(event) {
    event.preventDefault();
    personalWebsiteShown.hidden = !personalWebsiteShown.hidden;
    personalWebsiteReturnShown.hidden = !personalWebsiteReturnShown.hidden;
    
});
document.getElementById("second-website-button").addEventListener("click", function(event) {
    event.preventDefault();
    onlineStorefrontWebsiteShown.hidden = !onlineStorefrontWebsiteShown.hidden;
    onlineStorefrontReturnShown.hidden = !onlineStorefrontReturnShown.hidden;
});
document.getElementById("return-content-button-proj1item2").addEventListener("click", function(event) {
    event.preventDefault();
    onlineStorefrontWebsiteShown.hidden = !onlineStorefrontWebsiteShown.hidden;
    onlineStorefrontReturnShown.hidden = !onlineStorefrontReturnShown.hidden;
});
document.getElementById("third-website-button").addEventListener("click", function(event) {
    event.preventDefault();
    thirdWebsiteShown.hidden = !thirdWebsiteShown.hidden;
    thirdReturnShown.hidden = !thirdReturnShown.hidden;
});
document.getElementById("return-content-button-proj1item3").addEventListener("click", function(event) {
    event.preventDefault();
    thirdWebsiteShown.hidden = !thirdWebsiteShown.hidden;
    thirdReturnShown.hidden = !thirdReturnShown.hidden;
});
// Portfolio Game Logic
document.getElementById("content-selection-link-game").addEventListener("click", function(event) {
    event.preventDefault();
    gameContentShown.hidden = !gameContentShown.hidden;
    frontendContentShown.hidden = true;
    cloudContentShown.hidden = true;
});

// Game Portfolio Logic
var projectIsekaiReturnShown = document.getElementById("return-content-button-proj2item1");
var projectIsekaiShown = document.getElementById("game-project1-item1");

var collisionTamerReturnShown = document.getElementById("return-content-button-proj2item2");
var collisionTamerShown = document.getElementById("game-project1-item2");

var collisionGateReturnShown = document.getElementById("return-content-button-proj2item3");
var collisionGateShown = document.getElementById("game-project1-item3");

// Toggle Project Isekai
document.getElementById("first-game-button").addEventListener("click", function(event) {
    event.preventDefault();
    projectIsekaiShown.hidden = !projectIsekaiShown.hidden;
    projectIsekaiReturnShown.hidden = !projectIsekaiReturnShown.hidden;
});
document.getElementById("return-content-button-proj2item1").addEventListener("click", function(event) {
    event.preventDefault();
    projectIsekaiShown.hidden = !projectIsekaiShown.hidden;
    projectIsekaiReturnShown.hidden = !projectIsekaiReturnShown.hidden;
});

// Toggle Collision Tamer
document.getElementById("second-game-button").addEventListener("click", function(event) {
    event.preventDefault();
    collisionTamerShown.hidden = !collisionTamerShown.hidden;
    collisionTamerReturnShown.hidden = !collisionTamerReturnShown.hidden;
});
document.getElementById("return-content-button-proj1item2").addEventListener("click", function(event) {
    event.preventDefault();
    collisionTamerShown.hidden = !collisionTamerShown.hidden;
    collisionTamerReturnShown.hidden = !collisionTamerReturnShown.hidden;
});

// Toggle Collision Gate
document.getElementById("third-game-button").addEventListener("click", function(event) {
    event.preventDefault();
    collisionGateShown.hidden = !collisionGateShown.hidden;
    collisionGateReturnShown.hidden = !collisionGateReturnShown.hidden;
});
document.getElementById("return-content-button-proj1item3").addEventListener("click", function(event) {
    event.preventDefault();
    collisionGateShown.hidden = !collisionGateShown.hidden;
    collisionGateReturnShown.hidden = !collisionGateReturnShown.hidden;
});






// Cloud Content Logic



document.getElementById("content-selection-link-cloud").addEventListener("click", function(event) {
    event.preventDefault();
    cloudContentShown.hidden = !cloudContentShown.hidden;
    frontendContentShown.hidden = true;
    gameContentShown.hidden = true;
});

var cloudProject1ReturnShown = document.getElementById("return-content-button-cloud1item1");
var cloudProject1Shown = document.getElementById("cloud-project1-item1");

var cloudProject2ReturnShown = document.getElementById("return-content-button-cloud1item2");
var cloudProject2Shown = document.getElementById("cloud-project1-item2");

var cloudProject3ReturnShown = document.getElementById("return-content-button-cloud1item3");
var cloudProject3Shown = document.getElementById("cloud-project1-item3");

document.getElementById("first-cloud-button").addEventListener("click", function(event) {
    event.preventDefault();
    cloudProject1Shown.hidden = !cloudProject1Shown.hidden;
    cloudProject1ReturnShown.hidden = !cloudProject1ReturnShown.hidden;
});

document.getElementById("return-content-button-cloud1item1").addEventListener("click", function(event) {
    event.preventDefault();
    cloudProject1Shown.hidden = !cloudProject1Shown.hidden;
    cloudProject1ReturnShown.hidden = !cloudProject1ReturnShown.hidden;
});

document.getElementById("second-cloud-button").addEventListener("click", function(event) {
    event.preventDefault();
    cloudProject2Shown.hidden = !cloudProject2Shown.hidden;
    cloudProject2ReturnShown.hidden = !cloudProject2ReturnShown.hidden;
});

document.getElementById("return-content-button-cloud1item2").addEventListener("click", function(event) {
    event.preventDefault();
    cloudProject2Shown.hidden = !cloudProject2Shown.hidden;
    cloudProject2ReturnShown.hidden = !cloudProject2ReturnShown.hidden;
});

document.getElementById("third-cloud-button").addEventListener("click", function(event) {
    event.preventDefault();
    cloudProject3Shown.hidden = !cloudProject3Shown.hidden;
    cloudProject3ReturnShown.hidden = !cloudProject3ReturnShown.hidden;
});

document.getElementById("return-content-button-cloud1item3").addEventListener("click", function(event) {
    event.preventDefault();
    cloudProject3Shown.hidden = !cloudProject3Shown.hidden;
    cloudProject3ReturnShown.hidden = !cloudProject3ReturnShown.hidden;
});

frontendProjectContentShown = document.getElementById("project-content-selection-link-frontend");
gameProjectContentShown = document.getElementById("project-content-selection-link-game");
cloudProjectContentShown = document.getElementById("project-content-selection-link-cloud");



