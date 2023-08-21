// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let brands =[
    'Armani',
    'Prada',
    'Rayban',
    'Valentino',
    'Versace',
    'Escada',
    'Furla',
    'Blumarine',
    'Chopard',
    'Silhouette'
    ];
console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);
console.log(brands[5]);
console.log(brands[6]);
console.log(brands[7]);
console.log(brands[8]);
console.log(brands[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre

let book1 ={
    title: 'book1',
    pageCount: 630,
    genre: 'fantastic'
}

let book2 ={
    title: 'book2',
    pageCount:480,
    genre: 'poetry'
}

let book3 ={
    title: 'book3',
    pageCount: 550,
    genre: 'drama'
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

book1.authors = ['name1', 'age_38'];
    console.log(book1)
book2.authors = ['name2', 'age_42'];
    console.log(book2)
book3.authors = ['name2', 'age_42'];
    console.log(book3)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users =[
    {name:'Olya', username:'user1', password:1234},
    {name:'Petr', username:'user2', password:23534},
    {name:'Diana', username:'user3', password:33534},
    {name:'Vladimir', username:'user4', password:43534},
    {name:'Sergey', username:'user5', password:53534},
    {name:'Masha', username:'user6', password:63534},
    {name:'Dima', username:'user7', password:73534},
    {name:'Kris', username:'user8', password:83534},
    {name:'Timur', username:'user6', password:93534},
    {name:'Kiril', username:'user10', password:103534},
    ];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=5;
let a= x!=0? 'Вірно':'Невірно';
console.log(a)













