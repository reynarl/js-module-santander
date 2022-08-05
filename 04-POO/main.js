// const Person = function(name, birth, job){ // propiedades de nuestro objeto
//   this.name = name
//   this.birth = birth
//   this.job = job
// }

// const reyna = new Person('Reyna', 1996, 'Developer')

// console.log(reyna)

// const Developer = function(name, skills){
//   Person.call(this, name) 
//   this.skills = skills
// }

// const carmen = new Developer('Carmen', 'js')

// console.log(carmen)

// Person.prototype.calculateAge = function(){
//   const today = new Date()
//   const year = today.getFullYear()
//   console.log(year-this.birth)
// }

// const reyna = new Person('Reyna', 1996, 'dev')
// console.log(reyna.calculateAge())

// reto 1

// const Vec = function(x,y){
//   this.x = x
//   this.y = y
// }

// Vec.prototype.plus = function(vec){
//   return new Vec(this.x + vec.x, this.y + vec.y)
// }

// Vec.prototype.minus = function(vec){
//   return new Vec(this.x - vec.x, this.y - vec.y)
// }

// Vec.prototype.length = function(){
//   return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
// }

// const vec1 = new Vec(1,2)
// const vec2 = new Vec(2,3)

// console.log(vec1.plus(vec2))
// console.log(vec1.minus(vec2))
// console.log(vec1.length())

//RETO 3

const Triangle = function(a,b,c){
  this.a = a
  this.b = b
  this.c = c
}

Triangle.prototype.getPerimeter = function(){
  return this.a + this.b + this.c
}

const triangle = new Triangle(1,2,3)

console.log(triangle)
console.log(triangle.getPerimeter())
