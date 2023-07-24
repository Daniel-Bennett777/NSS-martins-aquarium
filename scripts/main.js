import { getFish } from './database.js'
import { tipsList } from "./tips.js"
import { spotList } from './locations.js'
const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import { FishList } from './fish.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishList");
const tipsListSection = document.querySelector(".tipsList");
const spotsListSection = document.querySelector(".spotList");
spotsListSection.innerHTML = spotList();
tipsListSection.innerHTML = tipsList();
parentHTMLElement.innerHTML = FishList();


