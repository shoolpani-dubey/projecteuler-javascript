// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const findSumOfMultiplesBelowLimit = (no1,no2,limit)=>{
    let sum = 0;

    // let multiple1 = no1;
    // let multiple2 = no2;
    let i = 1;
    while(true){
        let multiple1=no1*i;
        let multiple2=no2*i;
        if(multiple1>=limit && multiple2>=limit){
            break;
        }
        if(multiple1<limit){
            // console.log(multiple1);
            sum = sum + multiple1;
        }
        if(multiple2<limit && multiple2%no1!==0){
            // console.log(multiple2);
            sum = sum + multiple2;
        }
        i++;
    }
    console.log("SUM:",sum);
};
findSumOfMultiplesBelowLimit(3,5,1000);