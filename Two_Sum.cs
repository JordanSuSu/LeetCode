public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Version1 Runtime 241ms, Memory 43.2MB
        
        // use dictionary to record those havent matched number
        // key: number, value: index
        Dictionary<int, int> dict_numIndex = new Dictionary<int, int>();
        int[] ans = new int[2];
        for (var i = 0; i < nums.Length; i ++){
            int offset = target - nums[i];
            if (dict_numIndex.ContainsKey(offset)){
                ans[0] = dict_numIndex[offset];
                ans[1] = i;
                break;
            }
            else if(!dict_numIndex.ContainsKey(nums[i]))
                dict_numIndex.Add(nums[i], i);
        }
        return ans;
    }
}
