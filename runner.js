import bubbleSort from './sorting.js' // defualt 
// import bs from './sorting.js' 

import { linearSearch as ls , binarySearch } from './searching.js'; // named export


let arr = [5,4,3,2,1];

bubbleSort(arr);
let ans1 = ls(arr, 3);
let ans2 =  binarySearch(arr, 9);
console.log(arr, ans1, ans2);


// in common js 

// const bs = require("./sorting.js") for importing some thing like this
