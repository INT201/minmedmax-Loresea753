const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let num =[n1,n2,n3]
  num.sort()
  // num.sort(function(a,b){return b-a})
  return `{ mim: ${num[0]}, mid: ${num[1]}, max: ${num[2]} }`
}
// console.log(minMedMax(85, 30, 1))
module.exports = minMedMax
