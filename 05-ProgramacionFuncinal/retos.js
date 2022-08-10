// RETO 1: Flatten

const arrays = [[1,2,3], [4,5], [6]]

function flatten(arrays){
  const newArray = []
  arrays.map(items => {
    items.map(item =>
      newArray.push(item)
    )
  })
  return newArray
}

const array = flatten(arrays)
console.log(array)

//RETO 2. Compact

// function compact(array) {
//   return result = array.filter(item => item)
// }

// const array = [0, 1, false, 2, '', 3];
// console.log(compact(array))
