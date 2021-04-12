function sayHi() {
  console.log("hi");
}

function threeBillion() {
  for (let i = 0; i < 3000000000; i++) {
    1 + 1;
  }
  console.log("3 BILLION!!!");
}

console.log("start")

setTimeout(sayHi, 1000);
setTimeout(sayHi, 1500);

threeBillion();
console.log("end");



