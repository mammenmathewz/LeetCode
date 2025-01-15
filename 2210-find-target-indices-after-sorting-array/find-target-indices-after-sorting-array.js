/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let arr = nums.sort((a,b)=>a-b)
    let result = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==target){
            result.push(i)
        }
    }
    return result
};