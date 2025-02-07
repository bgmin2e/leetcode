function maxProfit(prices: number[]): number {
    let max = prices[0];
    let min = prices[0];
    let profit = 0;

    for( let i=1; i<prices.length; i++) {
        const current = prices[i];
        if(max < prices[i]){
          max = prices[i];
        }
        if(min > prices[i]){
            min = prices[i];
            max = prices[i];
        }
        
        if(max - min > profit){
            profit = max - min;
        }
    }

    return profit
};