function steamrollArray(arr) {
  console.log(Array.isArray(arr[1]));

  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

/*function dropElements(arr, func) {
  var filteredArr = [];
  filteredArr = arr.filter(func);
  console.log(filteredArr);
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

/*function findElement(arr, func) {
  var num = 0;
  arr = arr.filter(func);
  console.log(arr);
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*

function smallestCommons(arr) {
  arr.sort(); // sort() defaults to descending order, hence arr[1] will be greater than arr[0] after the sort.
  var small = arr[1]-1, large = arr[1], multiplier = 1;  //small goes down (small--) to increase speed of algorythm as higher numbers are less likely to divide evenly.
  while(small >= arr[0]){
    if(large % small == 0){
small--;
    }
    else{
      small = arr[1]-1;
      large = arr[1] * multiplier;
      multiplier++;
    }
  }
  return large;
}


console.log(smallestCommons([23,18]));

/*
function sumPrimes(num) {
var arr = [2];
for(var i=3; i<=num; i++){
  if(isPrime(i)){
    console.log(i);
    arr.push(i);
  }
}
var total = arr.reduce(function(sum, val){

  return sum + val;
}, 0);
return total;
}



function isPrime(num){
  for(var i=2; i<num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}

console.log(sumPrimes(977));

/*function sumFibs(num) {
  fibArr = [1,1];
  while((fibArr[fibArr.length-1] + fibArr[fibArr.length-2]) <= num){
console.log("sum(fibArr) is",sum(fibArr),"and num is",num);

    fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    console.log(fibArr);

    }

return sum(fibArr);


}


function sum(arr){
  return arr.reduce(function(sum,val){


    if((val % 2) !== 0){

    return sum+val;
  }
  else{

    return sum;
  }


  },0);
}
console.log('check dis shit out',sum([ 1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181,
  6765,
  10946,
  17711,
  28657,
  46368 ]));

console.log('answer is',sumFibs(75024)); //returns 60696

/*function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  str = str.split(/(?=[A-Z])|_|\s/);
  for(var i=0; i<str.length; i++){
    str[i] = str[i].toLowerCase();
  }
  str = str.join('-');
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));

/*function convertHTML(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");
  return str;
}
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

//convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
/*function uniteUnique(arr) {
var concatArr = [];
var unionArr = [];

for(var i=0; i<arguments.length; i++){
  concatArr = concatArr.concat(arguments[i]);
}

console.log(concatArr);
for(var i=0; i<concatArr.length; i++){
  if(unionArr.indexOf(concatArr[i]) == -1){
    unionArr.push(concatArr[i]);
  }
}
return unionArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));



/*
console.log(fearNotLetter("abce"));


/*function pairElement(str) {
var dnaArr = [];
var tempArr = [];
  for(var i=0; i<str.length; i++){
    tempArr[0] = str[i];
    tempArr[1] = getPair(str[i]);

    dnaArr.push([str[i], getPair(str[i])]);
  }
  return dnaArr;
}

console.log(pairElement("ATCGA"));

function getPair(letter){
  letter = letter.toUpperCase();
  if(letter == 'A'){
    return 'T';
  }
  else if(letter == 'T'){
    return 'A';
  }
  else if(letter == 'C'){
    return 'G';
  }
  else if(letter == 'G'){
    return 'C';
  }
}

//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

/*function translatePigLatin(str) {
  if(vowelCheck(str[0])){
    return str + "way";
  }

if(!vowelCheck(str[0]) && !vowelCheck(str[1])){
  return str.substr(2) + str[0] + str[1] + 'ay';
}
else if(!vowelCheck(str[0])){
  return str.substr(1) + str[0] + 'ay';
}
}

console.log(translatePigLatin("consonant"));

function vowelCheck(letter){
  if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
    return true;
  }
  else{
    return false
  }
}

/*function myReplace(str, before, after) {
  console.log(after[0].toUpperCase());
  if(before[0] == before[0].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
    console.log(after);
  }
  var begin = str.search(before);
  var strArr = [];
  for(var i=0; i<str.length; i++){
    strArr.push(str[i]);
  }
  strArr.splice(begin, before.length, after)
  var ansString = strArr.join('');
  return ansString;
}

console.log(myReplace("His name is Tom", "Tom", "john"));

//myReplace("His name is Tom", "Tom", "john") should return "His name is John".
/*  // What's in a name?
  var arr = [], srcKeys = [];
  // Only change code below this line
  for(var keys in source){
    srcKeys.push(keys);
  }

  arr = collection.filter(function(obj){
    for(var i=0; i<srcKeys.length; i++){
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]){
        return false;
      }
    }
      return true;

  });

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));

/*function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [], keysArr = [];
  var sourceKey = [];
  // Only change code below this line

for(var key in collection[0]){
  keysArr.push(key);
}
for(var keys in source){
  sourceKey.push(keys);
}
console.log(sourceKey);
for(var i=0; i<collection.length; i++){
  for(var x=0; x<keysArr.length; x++){
    for( var z=0; z<sourceKey.length; z++){
    if(collection[i][keysArr[x]] == source[keysArr[x]]){
      arr.push(collection[i]);
    }
    }
  }
}

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));


/*
//whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

function whatIsInAName(collection, source) {
  // What's in a name?
  var keysArr = [];
  var arr = [];
  // Only change code below this line

for(key in collection[0]){
  keysArr.push(key);
}
for(key in source){
  var sourceKey = key;
}

for(var i=0; i<collection.length; i++){
  for(var x=0; x<keysArr.length; x++){
    if(collection[i][keysArr[x]] == source[sourceKey]){
      arr.push(collection[i]);
    }
  }
}

return ans;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
               { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//loop through array
//check source against collection for property match / ensure each property is accessed
//if match, export object to ans array
//return array
/*
function convertToRoman(num){
  num = num.toString();

  var ans = "", romanHuge = "", romanBig = "", romanSmall = "", tempStr = "", str = "";

  switch (num.length){
    case 1 : romanSmall = "I", romanBig = "V", romanHuge = "X";
    break;
    case 2: romanSmall = "X", romanBig =  "L", romanHuge = "C";
    break;
    case 3: romanSmall = "C", romanBig = "D", romanHuge = "M";
    break;
    case 4: romanSmall = "M";
  }

    if(num[0]==4){
      ans += romanSmall + romanBig;
    }
    else if(num[0]==9){
      ans += romanSmall + romanHuge;
    }
    else if(num[0]<4){
      for(var i=0; i<num[0]; i++){
        ans += romanSmall;
      }
    }
    else if(num[0]==5){
      ans += romanBig;
    }
    else if(5<num[0]<9){
      ans += romanBig;
      for(var i=5; i<num[0]; i++){
        ans += romanSmall;
      }

    }

    if(num.length == 1){
      return ans;
    }
    else{
      console.log(num.substr(1));
      return ans + convertToRoman(num.substr(1));
    }
}


console.log(convertToRoman(717));



/*function convertToRoman(num){
num = num.toString();
var ans;
if(num/1000 >= 1){ // 4 digits
var romanCount = Math.floor(num/1000);
ans = numeralCount(romanCount, 'M');
num = num - romanCount*1000;
console.log('num is', num);
num = num.toString();
var test = num.indexOf(9);
}
if(num.indexOf(9) == 0){  //3 digits
console.log('HIT');
}
return ans;
}

function numeralCount(count, letter){
var string ='';
for(var i=0; i<count; i++){
string = string + letter;
}
return string;
}



console.log(convertToRoman(3999));
//2014 returns MMXIV
//798 is DCCXCVIII
//3999 MMMCMXCIX
// 4 is IV


/*
//Compare two concatArr and return a new array with any items only found in one of the two given concatArr, but not both. In other words, return the symmetric difference of the two concatArr.

function diffArray(arr1, arr2) {
var filteredArr=[];
if(arr1.length >= arr2.length){
var longArr = arr1;
var shortArr = arr2;
}
else{
var longArr = arr2;
var shortArr = arr1;
}

longArr.filter(function(val){
console.log(shortArr.indexOf(val));
if(shortArr.indexOf(val) == -1){
filteredArr.push(val);
}
});

shortArr.filter(function(val){
console.log(longArr.indexOf(val));
if(longArr.indexOf(val) == -1){
filteredArr.push(val);
}
});

return filteredArr;
}





console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
["diorite", "andesite", "grass", "dirt", "dead shrub"]));

/*function sumAll(arr) {

var low = Math.min(arr[0],arr[1]), high = Math.max(arr[0],arr[1]), sum = high + low;
console.log(Math.min(arr[0],arr[1]));
console.log('low is', low, 'and high is', high,'and sum is',sum,'and arr is',arr);
low++;
high--;
arr = [low,high];

if(low <= high){
return sumAll(arr) + sum;
}
else{
return sum;
}
}

console.log(sumAll([5,10]));

/*
console.log('balls');
*/
