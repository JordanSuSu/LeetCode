// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// @param {number[]} prices
// @return {number}


// Hint: Traverse the entire array and utilize two variables to keep track of the current maximum and minimum numbers, updating the difference between the maximum and minimum values as needed.

// Runtime: 66ms, Memory: 58.77MB

var maxProfit = function(prices) {
    let num_minimum = prices[0];
    let num_maximum = prices[0];
    let num_profit = num_maximum - num_minimum;
    for (let i = 0; i < prices.length; i ++) {
        if (num_minimum > prices[i]) {
            if (num_profit < num_maximum - num_minimum) num_profit = num_maximum - num_minimum;
            num_minimum = prices[i];
            num_maximum = prices[i];
        }
        if (num_maximum < prices[i]) {
            num_maximum = prices[i];
            if (num_profit < num_maximum - num_minimum) num_profit = num_maximum - num_minimum;
        }
    }
    return num_profit;
};
