function solution(number, k) {
    let count = 0;
    const stack = [];
    
    for ( const item of number){
        while(count < k && stack[ stack.length - 1 ] < item ){
            stack.pop();
            count += 1;
        }
        stack.push(item)
    }
    
    while( count < k ){
        stack.pop();
        count+=1;
    }
    return stack.join("")
    
    
}