function intersection(nums1, nums2) {
    //convert to hashmap
    const map = {};
    //

    for (let i = 0; i < nums1.length; i++) {
        const value = nums1[i];
        for (let j = 0; j < nums2.length; j++) {
            const secondArrayValue = nums2[j];
            if (value === secondArrayValue && !map[secondArrayValue]) {
                map[secondArrayValue] = j;
            }
        }
    }
    return Object.keys(map).map(number => Number(number));
}


console.log(intersection([4,9,5], [9,4,9,8,4]))
//result [9,4]