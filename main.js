// // Реалізовуємо свій компютерний магазин.
// class Applshop {
//     constructor(hp,lenovo,aser,sammsung) {
//         this.hp = hp;
//         this.lenovo = lenovo;
//         this.aser = aser;
//         this.sammsung = sammsung
//     }
// }
// let applStore = new Applshop('850$', '730$','620$','1020$')
// console.log(applStore)
//
// // ===
// // Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// //     Оперативна память.
// //     Потужність процесора. (цифра від 0 до 1000)
// // Назва.
// //     В кожного компютера має бути метод включання.
// // ===
//
// class Computer {
//     constructor(ram, cpuPowwer, iMac) {
//         this.ram = ram
//         this.cpuPower = cpuPowwer;
//         this.iMac = iMac;
//     }
//     Button (){
// document.write (`Включіть компютер через кнопку`)
//
//     }
// }
// let iMacAir = new Computer(8,800,'Air')
// iMacAir.Button()
// console.log(iMacAir)
// // Від базового компютрера треба реалізувати ноутбук.
// //     Він має нову властивість дюймаж монітора.
// //
// //     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// class Computernote extends Computer {
//     constructor(ram, cpuPower, iMac, inches) {
//         super(ram,cpuPower,iMac);
//         this.inches = inches
//         this.battery = cpuPower / (ram * inches)
//     }
//     Button (){
//         document.write (`Включіть компютер через кнопку`)
//
//     }
// }
// let value = new Computernote(6,600,'Sammsung',12.5);
// console.log(value)
//
// // ===
// // Від ноутбука потрібно зробити ультрабук.
// //     Він має нову змінну ваги.
// //     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// class UltraBook extends Computernote {
//     constructor(ram, cpuPower, iMac, inches, weight) {
//         super(ram, cpuPower, iMac, inches);
//         this.weight = weight
//     }
//     Include () {
//     if (this.weight > 2 && this.battery < 4) {
//         console.log('error')
//     }
//     }
// }
// let result = new UltraBook(6,400,'Sammsung',20,5)
// console.log(result)
// result.Include()
// // ===
// // Від базвого класу потрібно створити базовий ПК.
// //     В нього має бути новий метод запуску ігор.
// //     Кількість FPS визначається як потужність / опервтивку.
// //     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// class ComputerUpdate extends Computer {
//     constructor(ram, cpuPowwer, iMac , gameName) {
//         super(ram, cpuPowwer, iMac);
//         this.gameName = gameName
//         this.fps = cpuPowwer / ram
//     }
//     loadingGame () {
//         console.log(`You are playing ${this.gameName} with ${this.fps}`)
// }
// computerUpdate (procent) {
//
//         if (procent > 0.10){
//             console.log('eror')
//         } else {
//             this.cpuPower = this.cpuPower + (this.cpuPower * procent)
//         }
// }
// computerRamUpdate (doubleRam) {
//         this.ram *= 2
// }
//
// }
// let infoGame = new ComputerUpdate (6, 400,'lenovo', 'dota2');
// infoGame.loadingGame()
// infoGame.computerUpdate(0.10)
// infoGame.computerRamUpdate(4)
// console.log(infoGame)
// //
// // Компютер можна апгрейдити.
// //     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// //     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// //     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// // ===
// // Від базового ПК необхідно зробити ігнорий ПК.
// //     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// //     При запуску однієї гри потужніть процесора має падати на 0.1%.
// // Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
// //     що на цьому відрі ігри не запускаються.
//
// class ComuterGameUpdate extends ComputerUpdate {
//     constructor(ram, cpuPowwer, iMac , gameName) {
//         super(ram, cpuPowwer, iMac , gameName);
//         this.fps = this.fps * 2;
//
//     }
//     play1Game (loadingGame){
//        this.cpuPower -= (this.cpuPower * 0.01)
//     }
//     checCpuPowwer (){
//         if (this.cpuPower < 500 && this.ram < 7){
//             console.log('на цьому відрі ігри не запускаються')
//         }
//     }
// }
// let uptdate = new ComuterGameUpdate(4,200,'Lenovo','dota2')
// uptdate.play1Game()
// console.log(uptdate)
// uptdate.checCpuPowwer()
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car (model,graduationYear,maxSpeed, уngineCapacity){
//     this.model = model;
//     this.graduationYear = graduationYear;
//     this.maxSpeed = maxSpeed;
//     this.уngineCapacity = уngineCapacity;
//
//     this.drive = function (driveMax){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function (){
//         console.log(`Моя можель машини ${this.model}, рік випуску ${this.graduationYear}, максимальна швидкість ${this.maxSpeed}, обєм двигуна ${this.уngineCapacity}`)
//     }
//     this.addDirver = function (Oleg) {
//         this.dirver = Oleg
//     }
// }
// let cars = new Car('Opel',2012,220,2);
// let increaseMaxSpeed = new Car('Opel',2012,'newSpeed',2);
// let changeYear = new Car('Opal','changeYear','newSpeed',2);
// let addDriver = new Car('Oleg','changeYear','newSpeed',2)
// cars.drive()
// cars.info()
// cars.info()
// cars.addDirver('oleg')
// console.log(cars)
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення changeYear
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class CarInfo {
//     constructor(model,producer,graduationYear,maxSpeed,уngineCapacity) {
//         this.model =  model;
//         this.producer = producer;
//         this.graduationYear = graduationYear;
//         this.maxSpeed = maxSpeed;
//         this.уngineCapacity = уngineCapacity;
//     }
// drive (){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
// info (){
//     console.log(`Моя можель машини ${this.model}, виробник ${this.producer}, рік випуску ${this.graduationYear}, максимальна швидкість ${this.maxSpeed}, обєм двигуна ${this.уngineCapacity}`)
// }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = 'newSpeed'
//     }
//     changeYear (newValue) {
//         this.graduationYear = 'newValue'
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
// }
// let values = new CarInfo('Opel','germany', 2013,205,2);
// console.log(values)
// values.drive()
// values.increaseMaxSpeed()
// values.changeYear()
// values.addDriver('Oleg')



//
//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

//
// class сinderella {
//     constructor(name,age,footsSize,) {
//         this.name = name;
//         this.age= age;
//         this.footsSize = footsSize;
//     }
// }
//
// let Princesa = [new сinderella('Ira',23,18),
//     new сinderella('katya',18,34),
//     new сinderella('karolina',18,23),
//     new сinderella('kuz9',18,22),
//     new сinderella('hunta',18,45),
//     new сinderella('olya',18,33),
//     new сinderella('kira',18,39),
//     new сinderella('oksana',18,20),
//     new сinderella('yolya',18,36),
//     new сinderella('samka',18,44)
// ]
// class humen {
//     constructor(name,age,footsSize) {
//         this.nema = name;
//         this.age = age;
//         this.footsSize = footsSize;
//     }
// }
// let princ = new humen('Viktor',38,36)
// for (const bingo of Princesa) {
//     if (bingo.footsSize === princ.footsSize ){
//         console.log(bingo)
//     }
// }
//
//
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Princec (name,age,footsSize) {
    this.name = name;
    this.age = age;
    this.footsSize = footsSize;
}
let Princecc = [new Princec('Ira',23,18),
    new Princec('katya',18,34),
    new Princec('karolina',18,23),
    new Princec('kuz9',18,22),
    new Princec('hunta',18,45),
    new Princec('olya',18,33),
    new Princec('kira',18,39),
    new Princec('oksana',18,20),
    new Princec('yolya',18,36),
    new Princec('samka',18,44)]
function Princ (name,age,footsSize){
    this.name = name;
    this.age = age;
    this.footsSize = footsSize;
}
let princInfo = new Princ('Vasil',28,34)
for (const info of Princecc) {
    if (info.footsSize === princInfo.footsSize){
        console.log(info)
    }
}