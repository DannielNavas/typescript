(() => {
  //TODO: se usua el type en pascalcase
  type IdUser = number | string;
  let userId: IdUser;

  //TODO: Literal types
  type ShirtSize = 'small' | 'medium' | 'large' | 'extra large';
  let shirtSize: ShirtSize;
  shirtSize = 'small';
  shirtSize = 'medium';
  shirtSize = 'large';
  shirtSize = 'extra large';
  // shirtSize = 'extra extra large'; // Error

  function greeting(userId: IdUser, size: ShirtSize) {
    if (typeof userId === 'string') {
      console.log(`Hello ${userId.toLowerCase()}`);
    }
  }

  greeting('Hello', 'small');
})();
