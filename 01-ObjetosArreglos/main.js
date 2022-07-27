// Reto 1: Calcular promedio
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]

let sum = 0

for(const number of numbers){
  sum = sum + number
}

console.log(`promedio: ${sum/numbers.length}`)

// Reto 2: convertir un arreglo con pares [key, value] a un objeto con sus respectivas propiedades

const auto = {}

const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

for(let i=0; i<car.length; i++){
  auto[car[i][0]] = car[i][1]
}

console.log(auto)

// Reto 3: Extraer las URLs de facebook e instagram y renombrar las variables por fb e ig respectivamente.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  links: {
    web: {
      blog: 'https://johndoe.com'
    }, 
    social: {
      facebook: 'https://facebook.com/john.doe',
      instagram: 'https://instagram.com/john.doe'
    } 
  }
}

const {links:{social:{facebook:fb, instagram:ig}}} = person

console.log(`Facebook: ${fb} Instagram:${ig}`)