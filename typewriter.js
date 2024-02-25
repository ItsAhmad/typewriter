function typingAnimation(string, delay) {
  let index = 0 

  function printDelay() {
    if (index < string.length){
      process.stdout.write(string[index]);
      index++;
  
    setTimeout(printDelay, delay);
  } else {
    console.log();
  }
}


  printDelay();
};


const theString = "hello there from lighthouse labs";
const delay = 100;

typingAnimation(theString, delay);