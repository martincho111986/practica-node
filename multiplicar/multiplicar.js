const fs = require("fs");
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('==============='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('==============='.green);
  let lista = "";
  for (let i = 1; i <= limite; i++) {
    lista += `${base} * ${i} = ${base * i}\n`;
  }
  return console.log(colors.random(lista));
};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }

    let data = "";
    // como hacer una tabla de multiplicar
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    //imprimir en un txt las tablas
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
