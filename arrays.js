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
const listaTerminada = document.querySelector('.listaVerMasTarde');
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
    const titulo = document.querySelector("h1");
    titulo.innerHTML = "Su lista de 'ver más tarde' es: "
    for(const pelicula of listaVMT){
      const li = document.createElement("li");
      console.log(pelicula);
      li.innerHTML = `<p>Titulo: ${pelicula.titulo}, Productora: ${pelicula.productora}</p>`;
      listaTerminada.append(li);
    }
  }else{
    alert("Su lista está vacia.");
  }
}else{
  alert("Opción no válida");
}






