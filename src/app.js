import { union } from 'ramda';
import react from 'react'; // eslint-disable-line
import reactDOM from 'react-dom'; // eslint-disable-line

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10];

const arr3 = union(arr1, arr2);

console.log(arr3);

