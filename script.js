

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


// const a = [43, 65, -54, 7, 3];

// bubbleSort (a);

// function bubbleSort (a) {
//     for (let n = 0; n < a.length; n++) {
//         for (let i = 0; i < a.length - 1; i++) {
//             if (a[i]>a[i+1]){
//                 let b = a[i];
//                 a[i] = a[i + 1];
//                 a[i + 1] = b;
//             }
//         }
//     }
//     console.log(a);
// }



// const a = [1, 2, 3, 4];
// // console.log(a.push(8, 9, -2, 45));
// // let c = a.push(10);

// a.push(56, 57, 58, 59, 60, 61);
// console.log(a);
// console.log(a.pop());
// console.log(a.pop());

// console.log(a);

// delete a[3];
// console.log(a);

// a.splice(3, 2, 333);
// console.log(a);


// TASK 1
// Есть массив d1, кнопка b-1, input i-1. 
// Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив.
// После чего выводит массив в .out-1. 
// Поскольку мы будем выводить массив d1 неоднократно,
// то давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена.
// Изучите ее - это хороший способ оптимизировать код.

//          d1 = [33,'best', 66, 'best'];

// const  d1 = [33,'best', 66, 'best'];
// let b = document.querySelector('.b-1');
// let i = document.querySelector('.i-1');
// let c = document.querySelector('.out');

// b.onclick = () => {
//     d1.push (i.value);
//     console.log(d1);
//     c.innerHTML = d1;
// }

// b.onclick = () => {
//     d1.shift (i.value);
//     console.log(d1);
//     c.innerHTML = d1;
// }







