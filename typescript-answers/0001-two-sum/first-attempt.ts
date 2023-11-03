function twoSum(nums: number[], target: number): number[] {
    let obj = {}

    for (let i=0; i < nums.length; i++) {
        obj[nums[i]] = [true, i]
    }

    for (let i=0; i < nums.length; i++) {

        let difference =  target - nums[i];
        
        if (obj[difference] ) {
            if (obj[difference][0] === true && obj[difference][1] != i) {
                    return [i, obj[difference][1]];
            }
        }
    }
}