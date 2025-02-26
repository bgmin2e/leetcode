function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        switch (token) {
            case '+': {
                const b = stack.pop()!;
                const a = stack.pop()!;
                stack.push(a + b);
                break;
            }
            case '-': {
                const b = stack.pop()!;
                const a = stack.pop()!;
                stack.push(a - b);
                break;
            }
            case '*': {
                const b = stack.pop()!;
                const a = stack.pop()!;
                stack.push(a * b);
                break;
            }
            case '/': {
                const b = stack.pop()!;
                const a = stack.pop()!;

                stack.push(Math.trunc(a / b));
                break;
            }
            default:
                stack.push(Number(token));
        }
    }

    return stack.pop()!;
}
