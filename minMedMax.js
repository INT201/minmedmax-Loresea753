const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let num =[n1,n2,n3]
  num.sort(function(a,b){return b-a})
  return `{ min: ${num[0]}, mid: ${num[1]}, max: ${num[2]} }`
}

module.exports = minMedMax
