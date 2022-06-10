// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array); // output false
console.log(b instanceof Array); // output true

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
let array = a.map((item) => {
  return 2 * item;
});
console.log(array); // output [2,4,6,8,10]

// Write the program, according to the following requirements output results.
var colors = ['Red', 'Green', 'White', 'Black'];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
let colors1 = colors.join(' ');
let colors2 = colors.join('+');
let colors3 = colors.join(',');
console.log(colors1); // output Red Green White Black
console.log(colors2); // output Red+Green+White+Black
console.log(colors3); // output Red,Green,White,Black

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
let sortArray = a.sort((x, y) => y - x);
console.log(sortArray);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
console.log(findMostFrequent(a));  // output a


function findMostFrequent(arr) {
  let max = null; //定义一个用来存储出现次数最多的元素
  let num = 1; //定义一个用来存储最出现的次数
  arr.reduce((p, k) => {  //对该数组进行reduce遍历
    p[k] ? p[k]++ : p[k] = 1;
    if (p[k] > num) {
      num = p[k];
      max = k;
    }
    return p;
  }, {});
  return max;//返回最多元素对象
}