function containsDuplicate(nums: number[]): boolean {

    let temp = nums[0]

    for (let i=0; nums.length > i; i++) {
        temp = nums[i]
        for (let j=0; nums.length > j; j++) {

            if (i == j) {
                break
            }

            if (nums[i] === nums[j]) {
                return true
            }
        }
    }

    return false
}


