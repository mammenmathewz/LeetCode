/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1Total =0
    let num2Total =0

    for(let i = 0; i<=n;i++){
        if(i%m!==0){
            num1Total+=i
        }else{
            num2Total+=i
        }
    }
  
    return num1Total-num2Total
    
};