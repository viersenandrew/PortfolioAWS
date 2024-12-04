// Navbar Variables
const resume = document.getElementById("resume-container");
const portfolio = document.getElementById("portfolio-container");
const projects = document.getElementById("projects-container");

// Resume Variables
const communicateScreenshotShown = document.getElementById("expanded-project-communicate");
const communicateMoreButtonShown = document.getElementById("communicate-screenshot-button");
const communicateLessButtonShown = document.getElementById("communicate-less-button");

const isekaiScreenshotShown = document.getElementById("expanded-project-isekai");
const isekaiMoreButtonShown = document.getElementById("isekai-screenshot-button");
const isekaiLessButtonShown = document.getElementById("isekai-less-button");

const gateScreenshotShown = document.getElementById("expanded-project-gate");
const gateMoreButtonShown = document.getElementById("gate-screenshot-button");
const gateLessButtonShown = document.getElementById("gate-less-button");

const frontendContentShown = document.getElementById("frontend-content");

const personalWebsiteShown = document.getElementById("frontend-project1-item1");
const personalWebsiteReturnShown = document.getElementById("return-content-button-proj1item1");

const secondWebsiteShown = document.getElementById("frontend-project1-item2");
const secondWebsiteReturnShown = document.getElementById("return-content-button-proj1item2");

const thirdWebsiteShown = document.getElementById("frontend-project1-item3");
const thirdWebsiteReturnShown = document.getElementById("return-content-button-proj1item3");

// Game Portfolio Content
const gameContentShown = document.getElementById("game-content");

const isekaiContentShown = document.getElementById("game-project1-item1");
const isekaiReturnShown = document.getElementById("return-content-button-proj2item1");

const tamerContentShown = document.getElementById("game-project1-item2");
const tamerReturnShown = document.getElementById("return-content-button-proj2item2");

const gateContentShown = document.getElementById("game-project1-item3");
const gateReturnShown = document.getElementById("return-content-button-proj2item3");
// Cloud Portfolio Content
const cloudContentShown = document.getElementById("cloud-content");

// Constants for Cloud Projects
const nimbusContentShown = document.getElementById("cloud-project1-item1");
const nimbusReturnShown = document.getElementById("return-content-button-cloud1item1");

const frontierContentShown = document.getElementById("cloud-project1-item2");
const frontierReturnShown = document.getElementById("return-content-button-cloud1item2");

const stratosphericContentShown = document.getElementById("cloud-project1-item3");
const stratosphericReturnShown = document.getElementById("return-content-button-cloud1item3");

// Projects Constants and Variables
const showFrontendProjectsContent = document.getElementById("frontend-projects");
const showGameProjectsContent = document.getElementById("game-projects");
const showCloudProjectsContent = document.getElementById("cloud-projects");

// Frontend Projects
// Frontend Projects Item1
const showFrontendProjectsItem1 = document.getElementById("projects-frontend-item1");
const showFrontendProjectsReturnItem1 = document.getElementById("projects-frontend-return-item1");
// Frontend Projects Item2
const showFrontendProjectsItem2 = document.getElementById("projects-frontend-item2");
const showFrontendProjectsReturnItem2 = document.getElementById("projects-frontend-return-item2");
// Frontend Projects Item3
const showFrontendProjectsItem3 = document.getElementById("projects-frontend-item3");
const showFrontendProjectsReturnItem3 = document.getElementById("projects-frontend-return-item3");

// Game Projects
// Game Projects Item1
const showGameProjectsItem1 = document.getElementById("projects-game-item1");
const showGameProjectsReturnItem1 = document.getElementById("projects-game-return-item1");
// Game Projects Item2
const showGameProjectsItem2 = document.getElementById("projects-game-item2");
const showGameProjectsReturnItem2 = document.getElementById("projects-game-return-item2");
// Game Projects Item3
const showGameProjectsItem3 = document.getElementById("projects-game-item3");
const showGameProjectsReturnItem3 = document.getElementById("projects-game-return-item3");

// Cloud Projects
// Cloud Projects Item1
const showCloudProjectsItem1 = document.getElementById("projects-cloud-item1");
const showCloudProjectsReturnItem1 = document.getElementById("projects-cloud-return-item1");
// Cloud Projects Item2
const showCloudProjectsItem2 = document.getElementById("projects-cloud-item2");
const showCloudProjectsReturnItem2 = document.getElementById("projects-cloud-return-item2");
// Cloud Projects Item3
const showCloudProjectsItem3 = document.getElementById("projects-cloud-item3");
const showCloudProjectsReturnItem3 = document.getElementById("projects-cloud-return-item3");

// Color picker variables
const colorPickerShown = document.getElementById("color-picker-box");
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

// Event Listener for finding if an a link has be pressed an setting 
// the correct action to take place
document.addEventListener("click", function(event) {
    // Check if the clicked element is a link
    if (event.target.tagName === "A") {
        event.preventDefault(); // prevent default behavior
        
        // Get the href value
        const href = event.target.getAttribute("href");

        // Switch statement to determine action
        switch (href) {

            case "/resume":
                showSection(resume);
                hideSection(portfolio);
                hideSection(projects);
                break;
            // Communicate More Button
            case "/more-communicate":
                toggleVisibility(communicateScreenshotShown);
                toggleVisibility(communicateMoreButtonShown);
                showSection(communicateLessButtonShown);
                break;  
            // Communicate Less Button
            case "/less-communicate":
                toggleVisibility(communicateScreenshotShown);
                toggleVisibility(communicateMoreButtonShown);
                hideSection(communicateLessButtonShown);
                break;
            // Isekai More Button
            case "/more-isekai":
                toggleVisibility(isekaiScreenshotShown);
                toggleVisibility(isekaiMoreButtonShown);
                showSection(isekaiLessButtonShown);
                break;
            // Isekai Less Button
            case "/less-isekai":
                toggleVisibility(isekaiScreenshotShown);
                toggleVisibility(isekaiMoreButtonShown);
                hideSection(isekaiLessButtonShown);
                break;
            // Gate More Button
            case "/more-gate":
                toggleVisibility(gateScreenshotShown);
                toggleVisibility(gateMoreButtonShown);
                showSection(gateLessButtonShown);
                break;
            // Gate Less Button
            case "/less-gate":
                toggleVisibility(gateScreenshotShown);
                toggleVisibility(gateMoreButtonShown);
                hideSection(gateLessButtonShown);
                break;

            // Portfolio Page Button
            case "/portfolio":
                showSection(portfolio);
                hideSection(resume);
                hideSection(projects);
                break;

            // Frontend Selection Button
            case "/frontend-portfolio":
                toggleVisibility(frontendContentShown);
                hideSection(gameContentShown);
                hideSection(cloudContentShown);
                break;
            // Personal Website Button
            case "/personal-website":
                toggleVisibility(personalWebsiteShown);
                showSection(personalWebsiteReturnShown);
                break;
            // Personal Website Return Button    
            case "/reveal-personal-website":
                toggleVisibility(personalWebsiteShown);
                hideSection(personalWebsiteReturnShown);
                break;

            // Second Website Selection On
            case "/storefront-button":
                toggleVisibility(secondWebsiteShown);
                showSection(secondWebsiteReturnShown);
                break;
            // Second Website Selection Off
            case "/reveal-storefront-website":
                toggleVisibility(secondWebsiteShown);
                hideSection(secondWebsiteReturnShown);
                break;
                
            // Third Website Selection On
            case "/third-button":
                toggleVisibility(thirdWebsiteShown);
                showSection(thirdWebsiteReturnShown);
                break;
            // Third Website Selection Off
            case "/reveal-third-website":
                toggleVisibility(thirdWebsiteShown);
                hideSection(thirdWebsiteReturnShown);
                break;
                

            // Game Selection Button
            case "/game-portfolio":
                toggleVisibility(gameContentShown);
                hideSection(frontendContentShown);
                hideSection(cloudContentShown);
                break;

            // Project Isekai Selection On
            case "/project-isekai":
                toggleVisibility(isekaiContentShown);
                showSection(isekaiReturnShown);
                break;
            
            // Project Isekai Selection Off
            case "/reveal-project-isekai":
                toggleVisibility(isekaiContentShown);
                hideSection(isekaiReturnShown);
                break;

            // Cloud Selection Button
            case "/cloud-portfolio":
                toggleVisibility(cloudContentShown);
                hideSection(frontendContentShown);
                hideSection(gameContentShown);
                break;
            
            // Collision Tamer Selection On
            case "/collision-tamer":
                toggleVisibility(tamerContentShown);
                showSection(tamerReturnShown);
                break;

            // Collision Tamer Selection Off
            case "/reveal-collision-tamer":
                toggleVisibility(tamerContentShown);
                hideSection(tamerReturnShown);
                break;

            // Collision Gate Selection On
            case "/collision-gate":
                toggleVisibility(gateContentShown);
                showSection(gateReturnShown);
                break;

            // Collision Gate Selection Off
            case "/reveal-collision-gate":
                toggleVisibility(gateContentShown);
                hideSection(gateReturnShown);
                break;

            // Project Nimbus Selection On
            case "/project-nimbus":
            toggleVisibility(nimbusContentShown);
            showSection(nimbusReturnShown);
            break;

            // Project Nimbus Selection Off
            case "/reveal-project-nimbus":
                toggleVisibility(nimbusContentShown);
                hideSection(nimbusReturnShown);
                break;

            // Cloud Frontier Selection On
            case "/cloud-frontier":
                toggleVisibility(frontierContentShown);
                showSection(frontierReturnShown);
                break;

            // Cloud Frontier Selection Off
            case "/reveal-cloud-frontier":
                toggleVisibility(frontierContentShown);
                hideSection(frontierReturnShown);
                break;

            // Stratospheric Vision Selection On
            case "/project-stratospheric-vision":
                toggleVisibility(stratosphericContentShown);
                showSection(stratosphericReturnShown);
                break;

            // Stratospheric Vision Selection Off
            case "/reveal-project-stratospheric-vision":
                toggleVisibility(stratosphericContentShown);
                hideSection(stratosphericReturnShown);
                break;

            // Projects Page Button
            case "/projects":
                toggleVisibility(projects);
                hideSection(resume);
                hideSection(portfolio);
                console.log("Projects Pressed");
                break;


            // Projects Selection Buttons
            case "/frontend-projects-button":
                toggleVisibility(showFrontendProjectsContent);
                hideSection(showGameProjectsContent);
                hideSection(showCloudProjectsContent);
                console.log("frontend-projects-button pressed");
                break;

            // Frontend Projects Item1 On
            case "/projects-frontend-item1":
                showSection(showFrontendProjectsReturnItem1);
                hideSection(showFrontendProjectsItem1);
                break;
            
            // Frontend Projects Item1 Off
            case "/projects-frontend-return-item1":
                hideSection(showFrontendProjectsReturnItem1);
                showSection(showFrontendProjectsItem1);
                break;

            // Frontend Projects Item2 On
            case "/projects-frontend-item2":
                showSection(showFrontendProjectsReturnItem2);
                hideSection(showFrontendProjectsItem2);
                break;
            
            // Frontend Projects Item2 Off
            case "/projects-frontend-return-item2":
                hideSection(showFrontendProjectsReturnItem2);
                showSection(showFrontendProjectsItem2);
                break;

            // Front Projects Item3 On
            case "/projects-frontend-item3":
                showSection(showFrontendProjectsReturnItem3);
                hideSection(showFrontendProjectsItem3);
                break;
            
            // Frontend Projects Item3 Off
            case "/projects-frontend-return-item3":
                hideSection(showFrontendProjectsReturnItem3);
                showSection(showFrontendProjectsItem3);
                break;


            case "/game-projects-button":
                toggleVisibility(showGameProjectsContent);
                hideSection(showFrontendProjectsContent);
                hideSection(showCloudProjectsContent);
                break;

            // Game Projects Item1 On
            case "/projects-game-item1":
                showSection(showGameProjectsReturnItem1);
                hideSection(showGameProjectsItem1);
                break;

            // Game Projects Item1 Off
            case "/projects-game-return-item1":
                hideSection(showGameProjectsReturnItem1);
                showSection(showGameProjectsItem1);
                break;

            // Game Projects Item2 On
            case "/projects-game-item2":
                showSection(showGameProjectsReturnItem2);
                hideSection(showGameProjectsItem2);
                break;

            // Game Projects Item2 Off
            case "/projects-game-return-item2":
                hideSection(showGameProjectsReturnItem2);
                showSection(showGameProjectsItem2);
                break;

            // Game Projects Item3 On
            case "/projects-game-item3":
                showSection(showGameProjectsReturnItem3);
                hideSection(showGameProjectsItem3);
                break;

            // Game Projects Item3 Off
            case "/projects-game-return-item3":
                hideSection(showGameProjectsReturnItem3);
                showSection(showGameProjectsItem3);
                break;
            
            case "/cloud-projects-button":
                toggleVisibility(showCloudProjectsContent);
                hideSection(showFrontendProjectsContent);
                hideSection(showGameProjectsContent);
                break;

            // Cloud Projects Item1 On
            case "/projects-cloud-item1":
                showSection(showCloudProjectsReturnItem1);
                hideSection(showCloudProjectsItem1);
                break;

            // Cloud Projects Item1 Off
            case "/projects-cloud-return-item1":
                hideSection(showCloudProjectsReturnItem1);
                showSection(showCloudProjectsItem1);
                break;

            // Cloud Projects Item2 On
            case "/projects-cloud-item2":
                showSection(showCloudProjectsReturnItem2);
                hideSection(showCloudProjectsItem2);
                break;

            // Cloud Projects Item2 Off
            case "/projects-cloud-return-item2":
                hideSection(showCloudProjectsReturnItem2);
                showSection(showCloudProjectsItem2);
                break;

            // Cloud Projects Item3 On
            case "/projects-cloud-item3":
                showSection(showCloudProjectsReturnItem3);
                hideSection(showCloudProjectsItem3);
                break;

            // Cloud Projects Item3 Off
            case "/projects-cloud-return-item3":
                hideSection(showCloudProjectsReturnItem3);
                showSection(showCloudProjectsItem3);
                break;


            default:
                console.log("Path not recognized.");
        }

    }
});

function hideSection(contentHidden) {
    contentHidden.hidden = true; //Make invisible
}
function showSection(contentRevealed) {
    contentRevealed.hidden = false; //Make Visbible
}
function toggleVisibility(contentShown) {
    contentShown.hidden = !contentShown.hidden; //Toggle Visbility
}
