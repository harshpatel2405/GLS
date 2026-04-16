let myPromise = new Promise(function (res, rej) {
  isAvlbl = false;

  if (isAvlbl) res("This is a true scenario");
  else rej("This is false scenario");
});

myPromise.then((res) => console.log(res)).catch((rej) => console.log(rej));

let num = 5;
let bigNumber = new Promise(function (res, rej) {
  if (num > 10) res("Number is big");
  else rej("Number is small");
});

bigNumber.then((r) => console.log(r)).catch((r) => console.log(r));

let newData = new Promise((res) => res(10));

newData
  .then((x) => x * 2)
  .then((x) => x + 10)
  .then(console.log);

// let FetchData = new Promise(function (res, rej) {
//   let ans = fetch("url");

//   if (ans) res(ans.json());
//   else rej(ans.json());
// });


// let FetchData = async new Promise(function (res, rej) {
//   let ans = await fetch("url");

//   if (ans) res(ans.json());
//   else rej(ans.json());
// });
