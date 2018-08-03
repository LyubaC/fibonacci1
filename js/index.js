const num = parseInt(prompt('Please enter number'));
function fibonachi(num){
  

// if (num <= 1) 
//    return num;
// else 
//    return fibonachi(num - 1) + fibonachi(num - 2);
  

    if (num == 1 || num == 2) {
        return 1;
    } else {
        return fibonachi(num - 1) + fibonachi(num - 2);
    } 
 
}
const result = fibonachi(num);
alert(result);