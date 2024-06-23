var removeDuplicates = function(nums) {
    let insertIndex = 1;
    for(let i = 1; i < nums.length; i++) {
        console.log("comparing " + nums[i] + ' to ' + nums[i-1]);
        if(nums[i] !== nums[i-1]) {
            console.log("setting " + nums[insertIndex] + " at position " + insertIndex + " to " + nums[i]);
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
        console.log(nums);
    }
    return insertIndex;
}

// var nums = [1,1,2];
var nums = [0,0,1,1,1,2,2,3,3,4];
console.log('nums before function', nums);
var k = removeDuplicates(nums);
console.log('unique nums', k); // should be 5