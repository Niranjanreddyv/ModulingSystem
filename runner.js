import bubbleSort from './sorting.js' // defualt 
import { linearSearch , binarySearch } from './searching.js'; // named export


let arr = [5,4,3,2,1];

bubbleSort(arr);
let ans1 = linearSearch(arr, 3);
let ans2 =  binarySearch(arr, 9);
console.log(arr, ans1, ans2);


