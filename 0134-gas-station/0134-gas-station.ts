function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n = gas.length;
    let totalTank = 0;
    let currentTank = 0;
    let startIndex = 0;

    for (let i = 0; i < n; i++){
        const netGain = gas[i] - cost[i];
        totalTank += netGain;
        currentTank += netGain;

        if(currentTank < 0) {
            startIndex = i + 1;
            currentTank = 0;
        }
    }

    return totalTank >= 0 ? startIndex: -1;
};