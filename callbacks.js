const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let message = { message: "delay success!" };
      resolve(message);
    }, 500);
  });

const rejectPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let message = { message: "delay exception!" };
      reject(message);
    }, 500);
  });

resolvedPromise().then((message) => console.log(message));
rejectPromise().catch((message) => console.log(message));

