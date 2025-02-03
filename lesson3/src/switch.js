//Example 1
function receiptForDinner(lactoseFree, likeSpicy, budget){
    switch(true) {
        case lactoseFree && likeSpicy && budget >= 200:
            console.log("Pasta Carbonara will be the best decision");
            break;
        case lactoseFree && likeSpicy && budget <200:
            console.log("You can order MCDonalds for today");
            break;
        case lactoseFree && !likeSpicy && budget >= 200:
            console.log("Salmon with batata and souse for it sound awesome");
            break;
        case lactoseFree && !likeSpicy && budget < 200:
            console.log("Try to make a borshtch");
            break;
        case !lactoseFree && likeSpicy && budget >= 200:
            console.log("Tom Yam with the srimps");
            break;
        case !lactoseFree && likeSpicy && budget < 200:
            console.log("Spicy Chicken");
            break;
        case !lactoseFree && !likeSpicy && budget >= 200:
            console.log("Visit 'Classic Steakhouse'");
            break;
        case !lactoseFree && !likeSpicy && budget < 200:
            console.log("Home Pizza always a good choise");
            break;
    }
}

receiptForDinner(true, false, 150);
console.log("------------------------------");
receiptForDinner(false, false, 150);
console.log("------------------------------");
receiptForDinner(true, true, 200);

//Example 2

function recommendJob(hasDegree, yearsExperience, prefersRemote) {
    switch(true) {
        case hasDegree && yearsExperience >= 5 && prefersRemote:
            console.log("Senior Software Engineer (Remote)");
            break;
        case hasDegree && yearsExperience >= 5 && !prefersRemote:
            console.log("Senior Software Engineer (Offline)");
            break;
        case hasDegree && yearsExperience <5 && prefersRemote:
            console.log("Junior Developer (Remote)");
            break;
        case hasDegree && yearsExperience <5 && !prefersRemote:
            console.log("Junior Developer (Offline)");
            break;
        case !hasDegree && yearsExperience >=5:
            console.log("Self-Taught Developer or Freelance Projects");
            break;
        case !hasDegree && yearsExperience <5:
            console.log("Consider Learning Programming or an Internship");
            break;
    }
}


console.log("------------------------------");
recommendJob(true, 6, true);
console.log("------------------------------");
recommendJob(false, 3, false);
console.log("------------------------------");
recommendJob(true, 2, true);
