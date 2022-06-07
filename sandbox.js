/*
const towerBuilder = (nFloors) => new Array(nFloors).fill('*')
    .map((n) => n.repeat(nFloors*2-1))
    .map((n, i) =>i!==0?' '.repeat(i)+ n.slice(i, -i)+' '.repeat(i):n)
    .reverse();
console.log(towerBuilder(15));
*/

/*
const descendingOrder = (n) => Number(n.toString()
    .split('')
    .sort((a,b)=>b-a)
    .join(''))
console.log(descendingOrder(345454645))
*/
/*
const isPangram = (string) => new Set(string.toLowerCase()
    .split('')).size>25? true: false;

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
*/

/*
const alphabetPosition = (text) => {
  const arr = text.toLowerCase().match(/[a-z]/ig);
  return !Boolean(arr) ? '' : arr.map((n)=>n.charCodeAt()-96).join(' ');
}

console.log(alphabetPosition(''));
console.log(alphabetPosition('3y>4{8q1'));
*/
/*
const arrayDiff = (a, b) => {
  if (Boolean(a.length&&b.length)) {
    for (let i=0; i<b.length; i++) {
      a = a.filter((n) => n!=b[i]);
    }
    return a;
  } else {
    return a;
  }
};
console.log(arrayDiff([1, 4, 7], [1, 2]));
*/

/*
const d = [':)', '))', ';~~D', ';D'];
const countSmileys = (arr) =>
 arr.length? arr.filter((n) => n.match(/^[^\w\)]{1,2}\)|^\W{1,2}D/)).length: 0;
console.log(countSmileys(d));
*/
