// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Enter a number from 0 till 59' );
if (time>0 && time<=15) {
    console.log('First quarter of an hour')
} else if(time>15 && time<=30) {
    console.log('Second quarter of an hour')
}
else if(time>30 && time<=45) {
    console.log('Third quarter of an hour')
}
else if(time>45 && time<=59) {
    console.log('Fourth quarter of an hour')
}
else if(time<0 || time>59) {
    console.log('You enter the wrong number')
}