const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
//destructuring
const book = getBook(2);

const { title, author, genres, pages, hasMovieAdaptation } = book;

console.log(title, author, genres, pages);

// const primaryGenre = genres[0];
// const secondryGenre = genres[1];

const [primaryGenre, secondryGenre, ...otherGenre] = genres;
console.log(primaryGenre, secondryGenre, otherGenre);

const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

const updatedBook = { ...book, moviePublicationDate: "2022-01-01", pages: 300 };
console.log(updatedBook);

const summary = `${title}, is a ${pages} pages book`;
console.log(summary);

// function getYear(str) {
//   return str.split('-')[0];
// }

const getYear = (str) => str.split('-')[0];

console.log(getYear(book.publicationDate));


console.log(true && "Some string");
console.log(false && "Some string");

console.log(hasMovieAdaptation && "This book has a movie")


console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish || "No translation available");

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "No reviews available";
countWrong

const countRight = book.reviews.librarything.reviewsCount ?? "No reviews available";
countRight
*/

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;

}

const books = getBooks();
console.log(books);

const x = [1, 2, 3, 4, 5].map((number) => number * 2);
console.log(x);

const title = books.map((book) => book.title);
console.log(title);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book)
  }
});
console.log(essentialData);

const longBooks = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);


const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);


const arr = [3, 7, 1, 8, 6, 2, 9, 4, 5];
const sortedArr = arr.slice().sort((a, b) => b - a);
console.log(sortedArr);
console.log(arr);

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);


const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

//add book object to array
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);
console.log(books);

//delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);
console.log(booksAfterAdd);

//update book object in array
const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1 ? { ...book, pages: 1 } : book);
console.log(booksAfterUpdate);
console.log(booksAfterDelete);



console.log(5 % 6)

const initData = [
  {
    name: "河道神符",
    checked: true,
    time: -10,
    addSecond: 2 * 60,
  },
  {
    name: "智慧神符",
    checked: true,
    time: 6 * 60 + 45,
    addSecond: 7 * 60,
  },
  {
    name: "拉野屯野",
    checked: true,
    time: 45,
    addSecond: 60,
  },
  {
    name: "白天黑夜",
    checked: true,
    time: -20,
    addSecond: 5 * 60,
  },
];

console.log(initData.map((item) => ({
  ...{}, ...item, time:
    60 < item.time
      ? item.time : (parseInt(60 / item.addSecond) === 0 ? (parseInt(60 / item.addSecond) + 1) * item.addSecond + item.time : parseInt(60 / item.addSecond) * item.addSecond + item.time),
})))


let a = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
console.log(a)
console.log(a.slice().map((item) => item = { ...item, name: 'd' }))
console.log(a)