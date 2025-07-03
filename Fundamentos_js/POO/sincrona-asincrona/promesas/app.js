const promesa = new Promise((resolve, reject) => {
    const exito = true; // Cambia a false para ver el caso de error
  
    if (exito) {
      resolve("¡La operación fue exitosa!");
    } else {
      reject("Hubo un error en la operación.");
    }
  });
  
  promesa
    .then((mensaje) => {
      console.log(mensaje); // Se ejecuta si la promesa se resuelve
    })
    .catch((error) => {
      console.error(error); // Se ejecuta si la promesa es rechazada
    });