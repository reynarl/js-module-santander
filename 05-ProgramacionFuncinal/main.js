/* PROGRAMACION FUNCIONAL
Generalmente usar ciclos es programación imperativa pues queda del lado del programador controlar cuándo iniciar, cuándo terminar y qué hacer en cada ciclo
*/

/*  INMUTABILIDAD
Decimos que algo es mutable cuando puede ser cambiado o modificado. Por lo tanto, inmutable es algo que no puede ser alterado.
  - las variables inmutables nunca cambian su valor
*/

/*  Ejemplo 1. Inmutabilidad*/

//mutabilidad
const car = {
  brand: 'Nissan',
  model: 'Sentra',
  year: 2022
}

const addColor = (obj) => {
  obj.color = 'black'
  return car
}
console.log(car)

//la función addColor muta el objeto car que recibe. 
const changeColor = addColor(car)

console.log(car)
console.log(changeColor)
console.log(car === changeColor)

// inmutabilidad
/* para que addColor no mute el objeto que recibe usamos:
Object.assign() asigna las propiedades de un objeto a otro sin modificar el objeto original. En este ejemplo está copiando todas las propiedades de car en un nuevo objeto vacío {} y agregando la propiedad color.
*/

const addColorSinModificar = (obj) =>{
  const newCar = Object.assign({}, obj, {
    owner: 'Reyna'
  })
  return newCar
}

const newCar = addColorSinModificar(car)
console.log(car)
console.log(newCar)
console.log(car === newCar)


/*  FUNCIONES PURAS

Para que una función pueda ser considerada pura debe cumplir dos reglas:
  -El valor retornado siempre es el mismo cuando se da el mismo valor de entrada.
  -No debe producir side effects (efectos secundarios).
*/

//Podemos llamar las veces que queramos la esta función de la forma add(1, 2) y sabemos que siempre vamos a obtener el mismo resultado 3.
function add(a, b) { //funcion pura
  return a + b;
}

//Esta función no cumple la primera regla porque si la llamamos 10 veces, obtendremos cada vez un número aleatorio entre 1 y 10. No podemos predecir el valor de retorno de esta función.
function randomNumber() {
  return Math.floor(Math.random() * 10);
}

/*
Los side effects significan modificar algo fuera de la función. Algunos ejemplos:

  -Mutar los parámetros que recibe una función como en el Ejemplo 1.
  -Modificar cualquier variable fuera de la función.
  -Llamadas a una API.
  -console.log()

La función anterior add() también cumple con la segunda regla, no produce side effects. Solamente está trabajando con las variables que recibe la función y siempre retorna un valor, por lo tanto es una funcion pura
*/

//  Ejemplo 2. Funciones puras

//Tenemos un carrito de compras y queremos crear una función que agregue más artículos.

let cart = [
  {
    item: 'laptop',
    quantity: 1
  }
]

/*
La solución más obvia sería usar push() para agregar un nuevo objeto con las propiedades item y quantity. Esta función no es pura porque está modificando cart, una variable que no se encuentra dentro de esta función.

function addItemToCart(item, quantity) {
  cart.push({
    item: item,
    quantity: quantity
  })
}
*/

function addItemToCart(cart, item, quantity){
  const newCart = cart.map((element) =>{
    return element //creamos una copia retornando el parámetro que recibe sin modificarlo.
  })

  newCart.push(
    {
      item: item,
      quantity: quantity
    }
  )

  return newCart
}

cart = addItemToCart(cart, 'phone', '1')

console.log(cart)



//  FUNCIONES DE PRIMERA CLASE
/*
se dice que una función es de primera clase cuando:
  -puede ser pasada como argumento a otras funciones
  -cuando puede ser asignada a una variable
*/
var square = function(number) {
  return number * number;
}

var squareOfFour = square(4); //asignamos el valor de la funcion a una variable, por lo tanto es una funcion de primera clase



/*  FUNCIONES DE ALTO ORDEN
Cuando una función recibe otra función como parámetro se le llama de alto orden o de orden superior.
  - Las más usadas son map(), filter() y reduce().
*/

//map(), aplica una función sobre cada elemento del arreglo. No muta el arreglo original.

//filter() crea un nuevo arreglo, pero solo con aquellos elementos que retornen true por la función que actúa como predicado.
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

//reduce() acumula o reduce todos los elementos a un valor único según la función dada.

const sum = numbers.reduce((accumulator,currentValue) =>{
  return accumulator + currentValue
}, 0) // <- valor inicial

console.log(sum) // 15

// Ejemplo 3. Suma de dígitos

let num = 12345
//convertimos a string para aplicar el split y separarlos
num = num.toString().split('')
//recorremos con map para convertirlos a numero int uno por uno
num = num.map( num => Number(num))
//y así poder sumarlos
const sumar = num.reduce((acumulador, valorActual) => {
  return acumulador + valorActual
}, 0)

console.log(sumar)

/* todas las funciones pueden ser encadenadas de la siguiente forma:
function sumDigits(number) {
  return number
         .toString()
         .split('')
         .map(Number)
         .reduce(function(a, b) {
           return a + b;
         }, 0)
}
*/