class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
    const p = path.split("/")
    const stack = []

    for(let i =0; i < p.length; i++){
        
        if(p[i] === '' ||   p[i] === '.') continue;
        if(p[i] === '..') stack.pop()
       else  stack.push(`/${p[i]}`)

    }

    return stack.length === 0 ? "/": stack.join("")
    }
}
