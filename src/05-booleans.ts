(() => {
  let isEnable = true;
  console.log(isEnable);
  let isDisable: boolean = false;
  console.log(isDisable);

  const random = Math.random();
  console.log(random);
  let isNew: boolean = random > 0.5;
  console.log(isNew);
  //TODO: no usar la interfaz Boolean para declarar variables de tipo boolean mala practica usarla en mayuscula
  const myBoolean: Boolean = true;
})();
