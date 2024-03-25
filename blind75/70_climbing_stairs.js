// 70. Climbing Stairs

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45


// @param {number} n
// @return {number}


var climbStairs = function(n) {
    // Method 1 (Recursive)
    let arr_step = new Array(n);
    arr_step[1] = 1;
    arr_step[2] = 2;
    let count_stairs = function(s) {
        if (s == 1) return arr_step[1];
        else if (s == 2) return arr_step[2];
        else if (arr_step[s] > 0) return arr_step[s];
        else {
            // Following two lines aim for avoiding TLE and minimize runtime
            arr_step[s-1] = count_stairs(s-1);
            arr_step[s-2] = count_stairs(s-2);
            return arr_step[s-1] + arr_step[s-2];
        }
    }
    let ans = count_stairs(n);
    return ans;

    // Method 2
    let arr_step = new Array(n);
    arr_step[1] = 1;
    arr_step[2] = 2;
    if (n == 1) return 1;
    else if (n == 2) return 2;
    else {
        for (let i = 3; i <= n; i ++) {
            arr_step[i] = arr_step[i-1] + arr_step[i-2];
        }
    return arr_step[n];
    }
};
