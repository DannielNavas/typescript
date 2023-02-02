(() => {
  let myDinamicVar: any = 'My String';
  myDinamicVar = 100;
  myDinamicVar = true;
  myDinamicVar = () => {};
  myDinamicVar = {};
  myDinamicVar = [];
  myDinamicVar = null;
  myDinamicVar = undefined;

  //TODO: tener cuidado con el any pero seria bueno para una transicion de js a ts

  //TODO: any es un tipo de dato que puede ser cualquier cosa
  //TODO: la respuesta de una libreria puede ser any
  myDinamicVar = 'My String';
  //TODO: no se puede usar el any como tipo de dato
  // TODO: el cast es indicar que un tipo de dato es de otro tipo de dato en este caso de any a string
  const rta = (myDinamicVar as string).toUpperCase();
  console.log(rta);

  //TODO: otra forma de hacer el cast es con <> con genericos
  myDinamicVar = 100;
  const rta2 = (<number>myDinamicVar).toFixed(2);
  console.log(rta2);
})();
