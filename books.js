const Author = require ("./author.js");

class Book {
    constructor (title, author) {
      this.title = title;
      this.author = author;
      this.latestEdition = 1;
      //this.newEdition = 1;
    }
    newEdition () {
      this.latestEdition++
    }
}

// import author from "./author";


// const author = require("./author.js");
// const author1 = author ();

const LucyM = new Author ("Lucy M", 1890)
console.log (LucyM);

const GreenGables = new Book ("Anne of Green Gables", LucyM);
console.log (GreenGables);

GreenGables.newEdition ();
console.log (GreenGables);

