/* https://projecteuler.net/problem=5 */

const smallesDivisibleNumber = (min,max) => {
    let num = max;
    while(true){
        const divArr = [];
        for(let i=min;i<=max;i++){
            if(num%i===0){
                divArr.push(i);
            }
        }
        if(divArr.length===(1+max-min)){
            break;
        }
        num++;
    }
    console.log("Num:",num);
}
smallesDivisibleNumber(1,20);