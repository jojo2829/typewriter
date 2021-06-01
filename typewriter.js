const sentence = "hello there from lighthouse labs";

const typeWriter = function() {
  let time = 0;

  for (const char of sentence) {
    time += 500;
    setTimeout(() => {
    process.stdout.write(char); // print the char here
    }, time) // <= 1s delay to make it noticeable. Can dial it down later.
  }
}
typeWriter();

