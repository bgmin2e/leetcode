/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n; 
    
    reverse(nums, 0, n - 1);

    reverse(nums, 0, k - 1);

    reverse(nums, k, n - 1);
};

function reverse(arr:number[], start: number, end: number):void {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}