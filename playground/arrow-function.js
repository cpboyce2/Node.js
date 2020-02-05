// const square = function(x) {
//     return x*x
// }

// These are just like closures or lambda functions 
// const newSquare = (x) => {
//     return x*x
// }

// const square = (x) => x*x 

const event = {
    name: "Birthday party", 
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log("Guest list for " + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()