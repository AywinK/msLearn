var myIceCream = {
    flavor: "vanilla",
    scoops: 2,
    sauce: "chocolate",
    nuts: true
};
console.log(myIceCream.scoops);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops!";
    }
    else {
        return "your order will be ready soon";
    }
}
console.log(tooManyScoops({ flavor: "vanilla", scoops: 5, sauce: "strawberry" }));
