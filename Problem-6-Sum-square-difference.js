/* https://projecteuler.net/problem=6 */

const diffSSquareNSSum = (limit) => {
    let ssquare = 0;
    let ssum = 0;
    for(let i=1;i<=limit;i++){
        ssquare = ssquare + i**2;
        ssum = ssum + i;
    }
    const result = Math.abs(ssquare - ssum**2);
    console.log("Result:",result);
};
diffSSquareNSSum(100);