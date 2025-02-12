function isValid(s: string): boolean {
    const stack = [];
    const bracketsMap = {
        ')':'(',
        '}':'{',
        ']':'['
    };

    for(const char of s){
        if(char in bracketsMap){
            const lastElement = stack.pop();
            if(bracketsMap[char] !== lastElement){
                return false
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};