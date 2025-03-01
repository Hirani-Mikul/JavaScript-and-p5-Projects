var val = new Array(10);
val = val.fill().map(Math.random);
console.log(val);


// or
function createRand() {
  return Math.floor(Math.random() * 100);
}

vals = Array(10).fill().map(createRand);
console.log(vals);
