/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for(let i =0 ; i<nums.length;i++){
        let val = target-nums[i]
        if(map.has(val)){
            return [i,map.get(val)]
        }
        map.set(nums[i],i)
    }
};