/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let num1Last = m - 1;
    let num2Last = n - 1;
    let num1lastSlot = m + n - 1;

    while (num2Last >= 0) {
        if (num1Last >= 0 && nums1[num1Last]! > nums2[num2Last]!) {
            nums1[num1lastSlot] = nums1[num1Last] ?? 0;
            num1Last--;
        } else {
            nums1[num1lastSlot] = nums2[num2Last] ?? 0;
            num2Last--;
        }
        num1lastSlot--;
    }
};

 var nums1 = [1,2,3,0,0,0];
 var m = 3;
 var nums2 = [2,5,6];
 var n = 3;

 merge(nums1, m, nums2, n);

 console.log(nums1);
