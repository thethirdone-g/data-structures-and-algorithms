'use strict';

function reverseArray(arr){
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    newArray[i] = arr[arr.length - 1 - i];
  }
  return newArray;
}