// let task = new Promise(resolve => resolve("hi"))

console.log("start");

let task2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("error"), 2000);
})

task2
  .then(res => console.log("runs after 5 seconds"))
  .catch(err => console.log(err))