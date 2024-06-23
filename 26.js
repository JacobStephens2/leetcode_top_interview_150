var removeDuplicates = function(nums) {

    nums.forEach((value, index) => {
        console.log('checking nums for ' + value);
        var counter = 0;
        if (nums.includes(value) === true) {
            console.log('found ' + value + ', so removing it from nums');
            nums.splice(index, 1);
        } else {
            console.log('did not find ' + value + ' in nums');
        }
    });

    return nums.length;
};

var nums = [1,1,2];
// var nums = [0,0,1,1,1,2,2,3,3,4];

console.log('nums before function', nums);

var k = removeDuplicates(nums);

console.log('nums after function', nums);

console.log('unique nums', k); // should be 5