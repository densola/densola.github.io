// TWO SUM CODE
// also yes ik some of these solutions could be better, but bro what am i to do, i'm not even an official CS student.
let twoSumResult = document.getElementById('two-sum-result')

var twoSum = function(nums, target) {
    let l = nums.length;
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            if ((nums[i] + nums[j])===target) {
                return ([nums[i] + ' and ' + nums[j]]);
            }
        }
    }
};

function executeTwoSum() {
    let twoSumArray = document.getElementById('two-sum-array').value.split(',');
    newArray = twoSumArray.map(Number)
    let twoSumTarget = parseInt(document.getElementById('two-sum-target').value);
    if (twoSum(newArray, twoSumTarget) != undefined) {
        twoSumResult.innerHTML = twoSum(newArray, twoSumTarget) + ' are the two numbers that add up to ' + twoSumTarget;
    }
    else {
        twoSumResult.innerHTML = "Either one or both of the inputs you entered are invalid."
    }
    
    // document.getElementById('two-sum-array').value = '';
    // document.getElementById('two-sum-target').value = '';
}