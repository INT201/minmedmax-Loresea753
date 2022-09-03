const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let num =[n1,n2,n3]
  // num.sort()
  num.sort(function(a,b){return a-b})
  return console.log(`{ min: ${num[0]}, mid: ${num[1]}, max: ${num[2]} }`)
}
// minMedMax(-1, -8, 0)
module.exports = minMedMax
