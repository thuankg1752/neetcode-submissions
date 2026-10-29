class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if (prices.length === 0) {
            return 0;
        }
        let profit = 0;
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            const price = prices[i];
            if (minPrice > price) {
                minPrice = price;
            } else {
                profit = price - minPrice;
                maxProfit = Math.max(maxProfit, profit)
            }
        }
        return maxProfit
    }
}
