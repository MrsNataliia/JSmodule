// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Enter a day of the month ' );
if (day>1 && day<=10) {
    console.log('First decade of the month')
} else if(day>10 && day<=20) {
    console.log('Second  decade of the month')
}
else if(day>20 && day<=31) {
    console.log('Third  decade of the month')
}
else if(day<0 || day>31) {
    console.log('You enter the wrong number')
}