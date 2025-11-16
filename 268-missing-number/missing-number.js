/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sortedNums = nums.sort((a,b)=>a-b)
    for(let i = 0; i<sortedNums.length;i++){
       if(i !==sortedNums[i]){
        return i
       }
    }
    return nums.length
    
};