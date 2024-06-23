var majorityElement = function(nums) {
    var counts = [];
    for (i = 0;  i < nums.length; i++) {
        console.log(`nums[${i}]`, nums[i]);
        console.log("counts[nums[i]]", counts[nums[i]]);
        if (typeof(counts[nums[i]]) == 'undefined') {
            counts[nums[i]] = 1;
        } else {
            counts[nums[i]]++;
        }
        console.log('counts', counts);
    }
};

/*
    desired data structure result
    counts = [
        "3": 2,
        "2": 1
    ]
*/

var nums = [3,2,3];
console.log("nums", nums);
majorityElement(nums);
