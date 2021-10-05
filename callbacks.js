function resolvedPromise() {
  setTimeout(function () {
    let success = { message: "delayed success!" };
    console.log(success);
  }, 500);
}

function rejectedPromise() {
  setTimeout(function () {
    try {
      throw new Error("error: delayed exeception!");
    } catch (e) {
      console.error(e);
    }
  }, 500);
}

resolvedPromise();
rejectedPromise();
