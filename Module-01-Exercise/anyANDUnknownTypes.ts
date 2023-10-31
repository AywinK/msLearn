// let randomValue: any = 10;
// randomValue = "Mateo";
// randomValue = true;

// console.log(randomValue.name);
// randomValue();
// randomValue.toUpperCase();

let randomValue: unknown = 10;
randomValue = true;
randomValue = "Mateo";

// console.log(randomValue.name);
// randomValue();
// randomValue.toUpperCase();

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());
} else {
    console.log("Error - A string was expected here");
}