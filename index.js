const Array = require('./Array')

function main() {
  Array.SIZE_RATIO = 3;
  
  let arr = new Array();

  arr.push(3);

  console.log(arr);
}

main();