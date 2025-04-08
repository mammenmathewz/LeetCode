/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let first = 0
   let last = nums.length-1

   while(first<=last){
    let mid = Math.floor((first+last)/2)
    if(nums[mid]===target){
        return mid
    }
    if(target>nums[mid]){
        first = mid+1
    }else{
        last = mid-1
    }
   }
   return -1
};