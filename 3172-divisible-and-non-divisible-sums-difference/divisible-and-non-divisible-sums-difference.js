/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1Total =0
    let num2Total =0
    let num1 = []
    let num2=[]
    for(let i = 0; i<=n;i++){
        if(i%m!==0){
            num1.push(i)
            num1Total+=i
        }else{
            num2.push(i)
            num2Total+=i
        }
    }
    //  for(let i = 0; i<=m;i++){
    //     if(i%n!==0){
    //         num2.push(i)
    //         num2Total+=i
    //     }
    // }
    console.log(num1,num2)
    return num1Total-num2Total
    
};