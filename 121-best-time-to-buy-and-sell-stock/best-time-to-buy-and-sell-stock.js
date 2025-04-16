/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let buy = 0
    let sell = 1

    while (sell < prices.length) {
        if (prices[sell] > prices[buy]) {
            profit = Math.max(profit, prices[sell] - prices[buy])
        } else {
            buy = sell;
        }
        sell++
    }

    return profit;
};
