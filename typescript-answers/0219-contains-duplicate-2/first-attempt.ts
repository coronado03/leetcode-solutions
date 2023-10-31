function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let obj = {}

    for (let i=0; i < nums.length; i++) {

        if (obj[nums[i]]) {
            if (obj[nums[i]][0] === true ) {
                let calc = Math.abs(obj[nums[i]][1] - i) 
                if (calc <= k) {
                    return true
                }
            }
        }
        obj[nums[i]] = [true, i]    
    }
    return false
};