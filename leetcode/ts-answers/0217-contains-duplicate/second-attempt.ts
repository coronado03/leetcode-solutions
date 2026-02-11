function containsDuplicate(nums: number[]): boolean {
    let obj = {}

    for (let i=0; i < nums.length; i++) {
        if (obj[nums[i]] === true) return true
        obj[nums[i]] = true;     
    }

    return false
};