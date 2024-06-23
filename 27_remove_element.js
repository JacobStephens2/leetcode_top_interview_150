var removeElement = function(nums, val) {
    nums.forEach((num, index) => {
        if (num === val) {
            nums.splice(index, 1);
        }
    });

    // for (let i = 0; i < 5; i++) {
    //     text += "The number is " + i + "<br>";
    // }

    return nums;
};
var nums = [3,2,2,3];
var val = 3;
console.log('nums', nums);

var expectedNums = [2,2]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

var k = removeElement(nums, val); // Calls your implementation

if (k == expectedNums.length) {
    console.log('length expected');
} else {
    console.log('length not expected');
}
sort(nums, 0, k); // Sort the first k elements of nums
for (var i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}