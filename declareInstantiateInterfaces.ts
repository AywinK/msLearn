// interface IceCream {
//     flavor: string;
//     scoops: number;
//     instructions?: string;
// }

// interface Sundae extends IceCream {
//     sauce: "chocolate" | "caramel" | "strawberry";
//     nuts?: boolean;
//     whippedCream?: boolean;
//     instructions?: string;
// }

// let myIceCream: Sundae = {
//     flavor: "vanilla",
//     scoops: 2,
//     sauce: "chocolate",
//     nuts: true
// }

// console.log(myIceCream.scoops)

// function tooManyScoops(dessert: Sundae) {
//     if (dessert.scoops >= 4) {
//         return dessert.scoops + " is too many scoops!";
//     } else {
//         return "your order will be ready soon";
//     }
// }

// console.log(tooManyScoops({ flavor: "vanilla", scoops: 5 , sauce: "strawberry"}));

// interface IceCreamArray {
//     [index: number]: string;
// }

// let myIceCream: IceCreamArray;
// myIceCream = ["strawberry","chocolate","vanilla"];
// let myStr: string = myIceCream[0];
// console.log(myStr)

// const fetchURL = "https://jsonplaceholder.typicode.com/posts";

// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// async function fetchPosts(url: string) {
//     let response = await fetch(url);
//     let body = await response.json();
//     return body as Post[];
// }

// async function showPost() {
//     let posts = await fetchPosts(fetchURL);

//     let post = posts[0];
//     console.log("Post #" + post.id);

//     console.log("Author: " + (post.userId === 1 ? "Administrator" : post.userId.toString()));
//     console.log("Title: " + post.title);
//     console.log("Body: " + post.body);
// }

// showPost();

