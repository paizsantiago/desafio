class Pelicula{

  constructor (titulo, productora){
    this.titulo = titulo;
    this.productora = productora;
  }

  imprimirPelicula(){
    alert(`Titulo: ${this.titulo}, Productora: ${this.productora}`)
  }

}

//creacion variables

let tituloPelicula;
let productoraPelicula;
let controlador = false;
let listaVMT = [];
let opcion = prompt("Bienvenido, que desea hacer: / 1 : Agregar una pelicula a la lista 'ver más tarde' / 2 : Mostrar lista 'ver más tarde'.");

//agregar las peliculas al array

if (opcion === "1") {
  while(opcion === "1"){
    tituloPelicula = prompt("Ingrese el titulo de la pelicula: ");
    productoraPelicula = prompt("Ingrese la productora de la pelicula: ");
    let peliculaPrueba = new Pelicula(tituloPelicula, productoraPelicula);
    listaVMT.push(peliculaPrueba);
    opcion = prompt("Ingrese 1: Agregar pelicula , 2: Salir y mostrar lista 'ver más tarde'");
    controlador = true;
  }
}

//muestra el array con sus objetos dentro o en su defecto un alert avisando que esta vacio

if(opcion === "2"){
  if(controlador){
    alert("Su lista 'ver más tarde' es: ");
    for (let index = 0; index <= listaVMT.length; index++) {
      const element = new Pelicula(listaVMT[index].titulo , listaVMT[index].productora);
      element.imprimirPelicula();
    }
  }else{
    alert("Su lista está vacia.");
  }
}else{
  alert("Opción no válida");
}






