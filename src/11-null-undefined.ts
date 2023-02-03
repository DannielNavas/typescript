(() => {
  // let myNumber: number = undefined;
  // let myName: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 123;
  let myName: string | undefined = undefined;
  myName = 'Hello';

  // function hi(name: string | null) {
  //   let hello = 'Hello';
  //   if (name) {
  //     hello = hello + ' ' + name;
  //   } else {
  //     hello = hello + ' World';
  //   }
  //   return hello;
  // }

  function hiV2(name: string | null) {
    let hello = 'Hello';
    hello += name?.toLocaleLowerCase() || ' World';
    return hello;
  }

  console.log(hiV2('Jorge'));
  console.log(hiV2(null));
})();
