function simplifyPath(path: string): string {
    const stack: string[] = [];
    const parts = path.split("/");
    
    for (const part of parts){
        if(part === ".."){
            if(stack.length){
                stack.pop();
            }
        }
        else if(part !== "." && part !== "") {
            stack.push(part);
        }
    }

    return "/"+stack.join("/")

    stack.pop();

    return stack.join();
};