function containsNearbyDuplicate(nums, k) {
  const lastIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    if (lastIndex.has(val)) {
      const prevIndex = lastIndex.get(val);

      if (i - prevIndex <= k) {
        return true;
      }
    }
    lastIndex.set(val, i);
  }

  return false;
}

console.log(containsNearbyDuplicate([7, 8, 6, 7, 9], 3));
