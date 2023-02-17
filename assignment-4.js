// Assignment 4 submitted by Fakrul Islam
// Problem 1: Solution given below 

function seerToMon(seer) {
    const perMon = 40; // one mon equal 40
    let totalMon = seer / perMon;
    return totalMon;
}
let seer = seerToMon(200);
console.log(seer);

// Problem 2: Solution given below

function totalSales(sharts, pents, shoes) {
    const perShartPrice = 100;
    const perPentPrice = 200;
    const perShoePrice = 500;
    const totalShirtPrice = perShartPrice * sharts;
    const totalPentPrice = perPentPrice * pents;
    const totalShoePrice = perShoePrice * shoes;
    const totalPrice = totalShirtPrice + totalPentPrice + totalShoePrice; // total products price
    return totalPrice;
}

const totalProducts = totalSales(2, 5, 3);
console.log(totalProducts);

// Problem 3: Solution given below

function deliveryCost(tsharts) {
    const first100TshartDelevery = 100;
    const secondt100TshartDelevery = 80;
    const thirdRestTshartDelevery = 50;

    if (tsharts <= 100) {
        const count = tsharts * first100TshartDelevery;
        return count;
    } else if (tsharts <= 200) {
        const firstTshartDelevery = 100 * first100TshartDelevery;
        const restTshart = tsharts - 100;
        const secondtTshartDelevery = restTshart * secondt100TshartDelevery;
        const total = firstTshartDelevery + secondtTshartDelevery;
        return total;
    } else {
        const firstTshartDelevery = 100 * first100TshartDelevery;
        const secondtTshartDelevery = 100 * secondt100TshartDelevery;
        const restTshart = tsharts - 200;
        const thirdTshartDelevery = restTshart * thirdRestTshartDelevery;
        const total = firstTshartDelevery + secondtTshartDelevery + thirdTshartDelevery; // total delivery cost
        return total;
    }
}
const tsharts = deliveryCost(300);
console.log(tsharts);


// Problem 4: Solution given below

function perfectFriend(friends) {
    let friend = []; // output friend name
    for (let i = 0; i < friends.length; i++) {
        let friend1 = friends[i];
        if (friend1.length == 5) {
            friend.push(friend1);

        }
    }
    return friend;
}
const friends = ['Mahfuj', 'Jahid', 'Kamal Uddin', 'Jalal', 'Shanto'];
const nameFinal = perfectFriend(friends);
console.log(nameFinal);

// Assignment completed