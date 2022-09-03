const { template } = require('@babel/core')

// function minMedMax(n1, n2, n3) {
//   let num =[n1,n2,n3]
//   // num.sort()
//   num.sort(function(a,b){return a-b})
//   return `{ min: ${num[0]}, mid: ${num[1]}, max: ${num[2]} }`
// }

function minMedMax(n1, n2, n3){
  let num =[n1,n2,n3],swap,sw = false,end
  while (!sw) {
    end = 0
  
  for(j=1;j<num.length;j++){ 
    for(i=1;i<num.length;i++){
      if(num[i-1]>num[i]){
        swap = num[i]
        num[i] = num[i-1]
        num[i-1] = swap
        end = 1
        }
      }if (end == 0) {
        sw = true
      }
    }
  }
    return console.log(num)

  }

 
module.exports = minMedMax
