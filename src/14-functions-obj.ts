(() => {
  //TODO: Function with object as parameter

  const login = (data: { email: string; password: string }): string => {
    console.log(data.email, data.password);
    return 'Hello';
  };

  // login('danniel.gmail.com', '123456');
  login({
    email: 'danniel.gmail.com',
    password: '123456',
  });
})();
