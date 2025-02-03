//Example1
function receiptForDinner(lactoseFree, likeSpicy, budget){
    if(lactoseFree){
        if(likeSpicy){
            if (budget >= 200){
                console.log("Pasta Carbonara will be the best decision");
            } else {
                console.log("You can order MCDonalds for today");
            }
        } else {
            if (budget >= 200) {
                console.log("Salmon with batata and souse for it sound awesome");
            } else {
                console.log("Try to make a borshtch");
            }
        }
    } else {
        if (likeSpicy) {
            if (budget >= 200) {
                console.log("Tom Yam with the srimps");
            } else {
                console.log("Spicy Chicken");
            }
        } else {
            if (budget >= 200) {
                console.log("Visit 'Classic Steakhouse'");
            } else {
                console.log("Home Pizza always a good choise");
            }
        }
    }
}

receiptForDinner(true, false, 250);
console.log("------------------------------");
receiptForDinner(false, false, 150);
console.log("------------------------------");
receiptForDinner(true, true, 120);
console.log("------------------------------");
receiptForDinner(false, true, 200);

//Example2
function recommendJob(hasDegree, yearsExperience, prefersRemote) {
    if (hasDegree && yearsExperience >= 5) {
        if (prefersRemote) {
            console.log("Senior Software Engineer (Remote)");
        } else {
            console.log("Senior Software Engineer (Offline)");
        }
    } else if (hasDegree && yearsExperience < 5) {
        if (prefersRemote) {
            console.log("Junior Developer (Remote)");
        } else {
            console.log("Junior Developer (Offline)");
        }
    } else if (!hasDegree && yearsExperience >= 5) {
        console.log("Self-Taught Developer or Freelance Projects");
    } else {
        console.log("Consider Learning Programming or an Internship");
    }
}


console.log("------------------------------");
recommendJob(true, 6, true);
console.log("------------------------------");
recommendJob(false, 3, false);
console.log("------------------------------");
recommendJob(true, 2, true);
