

const array = [57, 36, 87, 8, 9, 90, 65, 5784, 765, -2, 76, -98, 65, -345];

bubbleSort (array); 
function bubbleSort (array) {
    for (let n=0; n < array.length; n++){
        for (let i=0; i< array.length - 1 - n; i++){
            if (array[i]>array[i+1]){
                const buff = array[i];
                array[i] = array[i+1];
                array[i+1] = buff;
            }
        }
    }
    console.log(array);
}
