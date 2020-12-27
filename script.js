// A
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderman = superheroes.find((superhero) => {
  return superhero.name === "Spiderman";
});

console.log("Deel A", findSpiderman);

// B
const arrayDouble = [1, 2, 3];

const doubleArrayValues = arrayDouble.map((array) => {
  return array * 2;
});

console.log("Deel B", doubleArrayValues);

// C
const numberBigger = [1, 4, 3, 6, 9, 7, 11];
// const numberBigger = [1, 2, 1, 2, 1, 2];

const containsNumberBiggerThan10 = numberBigger.some((array) => {
  return array >= 10;
});

console.log("Deel C", containsNumberBiggerThan10);

// D
const countries = [
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "United Kingdom",
  "United States",
];

const isItalyInTheGreat7 = countries.some((array) => {
  return array === "Italy";
});

console.log("Deel D", isItalyInTheGreat7);

// E
let resultArray = [];
numberBigger.forEach((array) => {
  resultArray.push(array * 10);
});
console.log("Deel E", resultArray);

// F
const below100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

const isBelow100 = below100.every((array) => {
  return array <= 100;
});

console.log("Deel F", isBelow100);

// G
const itemNumber = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  11,
  77,
  84,
  98,
  101,
  206,
  234,
];

const bigSum = itemNumber.reduce((array, currentTotal) => {
  return array + currentTotal;
}, 0);

console.log("Deel G", bigSum);
