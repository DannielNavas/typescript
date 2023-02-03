(() => {
  let myDynamicVar: string | number;
  myDynamicVar = 'My String';
  myDynamicVar = 100;

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`Hello ${myText.toLowerCase()}`);
    } else {
      console.log(`Hello ${myText.toFixed(2)}`);
    }
  }

  greeting('Hello');
  greeting(100);
})();
