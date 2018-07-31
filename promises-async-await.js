/*
    async / await
    Video Tutorial : https://www.youtube.com/watch?v=568g8hxJJp4 [Fun Fun Function]
    Prerequisite : promises -> https://www.youtube.com/watch?v=2d7s3spWAzo&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
*/

const waitForMe = (message = "_default_message_", msec = 10000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`The message is "${message}"`);
    }, msec);
  });
};

/* The first call return first */
waitForMe().then(result => console.log(result));
waitForMe("2nd call", 1000).then(res => console.log(res));
console.log("**** ***");

/* The calls are made consecutively */
const as = async () => {
  const res = await waitForMe("await 1st call");
  console.log(res);
  const res2 = await waitForMe("await 2nd call", 1000);
  console.log(res2);
};

as();
