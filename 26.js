var removeDuplicates = function(nums) {
    console.log('nums.length', nums.length);
    var length = nums.length;
    var numsFound = [];
    var pointer = 0;
    for(i = 0; i <= length; i++) {
        console.log('value at num[' + i + ']', nums[i]);

        if (numsFound.includes(nums[i]) === true) {
            // this value was previously found,
            // so remove it from nums
            console.log(nums[i] + ' was found in numsFound, so removing it from nums');
            var position = nums.indexOf(nums[i]);
            console.log('found ' + nums[i] + ' at position ' + position);
            nums.splice(position, 1);
            pointer++;
        } else {
            console.log(nums[i] + ' was not found in numsFound, so adding it to numsFound');
            numsFound.push(nums[i]);
        }
        console.log('numsFound', numsFound);

        console.log('nums', nums);
    }

    return nums.length;
};

// var nums = [1,1,2];
var nums = [0,0,1,1,1,2,2,3,3,4];
console.log('nums before function', nums);
var k = removeDuplicates(nums);
console.log('unique nums', k); // should be 5