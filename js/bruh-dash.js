var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/
var testArray = ["cat", "dog", "puppy", "kitten"]

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
    
  },

  // returns the last element of an array
  last: function (arr) {
    for (var i=0; i<arr.length; i++){
      return arr[arr.length-1];
    }
  },

  

  // returns the index of the first matching element from left to right
  indexOf: function (arr, target){
    for (var i=0; i < arr.length; i++){
      if (arr[i] === target){
        return i;
      }
    }
    return -1;
  },


  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, target){
    for (var i=arr.length-1; i >= 0; i--){
      if (arr[i] === target){
        return i;
      }
    }
    return -1;
  },


  // returns an array with all elements except for the last element
  initial: function (arr) {
    var newArr = [];
    newArr.length = arr.length;
    for (var i = 0; i < arr.length-1; i++){
      newArr[i] = arr[i]; 
    }
    return newArr
    
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    // console.log(arr);
    var trueArr = [];
    for (var i = 0; i < arr.length; i++){   
      if (arr[i]){
        trueArr.push(arr[i]);
     }
    }
    // console.log(trueArr);
    // console.log(trueArr.length);
    return(trueArr);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    // console.log(arr);
    newArr = [];
    for (var i = start; i<arr.length; i++){
      if (arr[i] <= end){
      newArr.push(arr[i])
    }
  }
    // console.log(newArr);
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    // console.log(arr);
    newArr = [];
    
    if (n >= 0){
      for (var i = n; i < arr.length; i++){
        newArr.push(arr[i]);
     }
   }else{
     for (var i = 1; i < arr.length; i++){
       newArr.push(arr[i]);
     }
   }
    // console.log(newArr);
    return (newArr);
},

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    // console.log(arr);
    newArr = [];

    if (n >= 0){
      for (var i = 0; i < arr.length-n; i++){
        newArr.push(arr[i]);
    }
    }else{
      for (var i = 0; i < arr.length-1; i++){
        newArr.push(arr[i]);
      }
    }
    // console.log(newArr);
    return newArr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function () {

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
