//Answer #1
function search(nums: number[], target: number): number {
    let low: number = nums[0];
    let high: number = nums[nums.length - 1];

    while (low <= high) {
        let mid: number = Math.floor((low+high) / 2)
       
        if (nums[mid] < target) {
           low = mid+1
        }

       else if (nums[mid] > target) {
            high = mid-1
        }

        else {
            return mid
        }
    }
    return -1 
};


//Test #1
const nums: number[] = [-1,0,3,5,9,12];
const target: number = 5;

console.log(search(nums, target));