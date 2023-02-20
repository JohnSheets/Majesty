const tributeChest = []
const queens = []

/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}


const createQueen = (queenId, queenName) => {
    const queen = {
        id: queenId,
        name: queenName
    } 

    queens.push(queen)
}

createQueen(1, "Athena Perez")
createQueen(2, "Charisse Ford")
createQueen(3, "Jenna Solis")
createQueen(4, "ramona")
createQueen(5, "Monica Dinglehopper")


for (const queen of queens) {

    const hailMessage = hailTheQueen(queen.name)  // What should be passed as an argument?
    console.log(hailMessage)

}

const payTribute = (tribId, tribDescription, queenId ) => {
    const tribute = {
        id: tribId,
        description: tribDescription,
        queenId: queenId
         
         
    }

tributeChest.push(tribute)

    // Add the tribute object to the tribute chest
}

payTribute(1, "Barrel of wine", 2)
payTribute(2, "Silk", 1)
payTribute(3, "Bushel of oranges", 3)
payTribute(4, "Ten gold coins", 1)
payTribute(5, "New puppy" , 5)
payTribute(6, "a cookie" , 4)

// iterate the queen objects to show tribute for each one
for (const queen of queens) {

    for (const tribute of tributeChest) {
        if (tribute.queenId === queen.id) {
            console.log(`${queen.name} has tribute ${tribute.description}`)
        }
    
    }
    }