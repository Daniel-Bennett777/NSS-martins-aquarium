
const database = {
    fish: [
        {
            image: "https://t3.ftcdn.net/jpg/01/93/84/66/240_F_193846671_yIQ6ChrpaBpq1C432ypC4VMCXoK3eRrT.jpg",
            name: "Muffin",
            species: "carcissius malafarius",
            length: 3,
            location: "Pacific",
            food: "Algae"
            
        },
        {
            image: "https://t4.ftcdn.net/jpg/02/08/71/39/240_F_208713963_vWWeg2PismV6WqqGQmHLO9FoGSO3wVoi.jpg",
            name: "Sophia",
            species: "Shark",
            length: 5,
            location: "Gulf",
            food: "Fish"
            
        },
        {
            image: "https://t3.ftcdn.net/jpg/02/24/58/00/240_F_224580052_6OkDIHIw0KxhQgVmb44mP6TPZODD0A3w.jpg",
            name: "shallop",
            species: "carcissius paradoxius",
            length: 6,
            location: "Atlantic",
            food: "Crustaceans"
            
        },
        {
            image: "https://t3.ftcdn.net/jpg/02/24/58/00/240_F_224580052_6OkDIHIw0KxhQgVmb44mP6TPZODD0A3w.jpg",
            name: "Baboonski",
            species: "carcissius paradoxius",
            length: 1,
            location: "Gulf",
            food: "Crustaceans"
            
        }
    ]
}

const databaseTwo = {
    Tips: [
        {
        title: "*Tank cleaning",
        description: "Be sure to clean the tank with a sponge every 3 days."
        },
        {
        title: "*Harvest tip",
        description: "Always bring your harpoon gun."
        },
        {
        title: "*Extra tip",
        description: "Fried fish is of the devil"
        },


    ]
}

const databaseThree = {
    spots: [
        {
            location: "*Gulf",
            description: "Gulf ranges from Florida to Mexico"
        },
        {
            location: "*Atlantic",
            description: "The Atlantic Ocean Spreads from longitude 155 down to -155"
        },
        {
            location: "*Pacific",
            description: "The Pacific Ocean Spreads from longitude 120 down to -120"
        }
    ]
}

export const renderLocations = () => {
    const spotsLocation = [];
    for (const spot of databaseThree.spots) {
        spotsLocation.push(spot.location);}
        return spotsLocation;
};
renderLocations()

export const renderTips = () => {
    const tipTitles = [];
  
    for (const tip of databaseTwo.Tips) {
      tipTitles.push(tip.title);
    }
  
    return tipTitles;
  };
  
  renderTips()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = [];
  
    for (const fish of database.fish) {
      if (fish.length % 3 === 0) {
        holyFish.push(fish.name);
      }
    }
  
    return holyFish
  };
  mostHolyFish()
  export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = [];
  
    for (const fish of database.fish) {
      if (fish.length % 5 === 0) {
        soldiers.push(fish.name);
      }
    }
  
    return soldiers;
  };
  soldierFish()
  export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = [];
  
    for (const fish of database.fish) {
      if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
        regularFish.push(fish.name);
      }
    }
  
    return regularFish;
  };
  nonHolyFish()

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
export const tipper = () => {
    return databaseTwo.Tips.map(Tips => ({...Tips}))
}
export const locator = () => {
    return databaseThree.spots.map(spots => ({...spots}))
}