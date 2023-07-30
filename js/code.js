function executeTwoSum() {
    let twoSumResult = document.getElementById("two-sum-result");

    var twoSum = function (nums, target) {
        let l = nums.length;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < l; j++) {
                if (nums[i] + nums[j] === target) {
                    return [nums[i] + " and " + nums[j]];
                }
            }
        }
    };

    let twoSumArray = document.getElementById("two-sum-array").value.split(",");
    newArray = twoSumArray.map(Number);
    let twoSumTarget = parseInt(document.getElementById("two-sum-target").value);

    if (twoSum(newArray, twoSumTarget) != undefined) {
        twoSumResult.textContent = twoSum(newArray, twoSumTarget) + " are the two numbers in your list that add up to your target of " + twoSumTarget;
    } else {
        twoSumResult.textContent = "The array or target you entered may be invalid.";
    }
}
