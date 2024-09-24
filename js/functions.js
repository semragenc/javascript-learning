console.log("Hello Functions")
//function keywordu ile tanımlşanır.
//Function Definitions
//BİRİNCİ YÖNTEM
function add(birinciSayi, ikinciSayi)  {
    console.log("Toplam: ", birinciSayi + ikinciSayi)
    console.log("Add Function Scope Level 2")
}

//Function Execution - Function Calling
add(8,9);
console.log("Global Scope Level 1")
//Reusable Code - Clean Code
function saveUserToken(token) {
    localStorage.setItem("token", token);
    //console.log(token)
}

saveUserToken("Bvtykgf359857456889578545747")
//arguments keywordu ile daha önce parametre verilmemiş
//bir fonksiyondan parametreler yaklanabiliyor.
function topla() {
    console.log(arguments)
    const args = Array.from(arguments)
    console.log(args)

    let top = 0;
    args.forEach((arg) => {
        top += arg
    })
    console.log("Toplam: ", top)
}

topla(1, 2, 3, 4, 5)
topla(4, 78, 94, 2, 57)

//İKİNCİ YÖNTEM
//Doğrudan arrow function ile çalışmaz.
//Function keywordü ile tanımlanır.
const cikar = function() {
    const numbers = Array.from(arguments)

    let cikarmaSonucu = 0;
    numbers.forEach((number)=> {
        cikarmaSonucu -= number
    })

    console.log("Çıkarma: ", cikarmaSonucu)
}

cikar(2,1)



function ortalamaHesapla() {
    const args = Array.from(arguments)


    let topList = 0;
    args.forEach((number) => {
        topList += number
    })

    return topList/ args.length
}


const ortalama = ortalamaHesapla(1, 2, 3, 4, 36)
console.log(ortalama)


//SCOPE - Kapsam

//Değiştirilebilecek şeyler global tanımlanır.
//Heryerden erişebilecek şeyler global olmalı.
const TIMEOUT_TIME = 1000;

function checkTimeOut() {
    const date = new Date()
    console.log("Timeout", TIMEOUT_TIME)
}
checkTimeOut();
//console.log(date);//erişemiyor consolda hata veriyor.

console.log("**************")

//Javascript, Python - Interpreter
// Java, C# - Compiler
function fnA() {
    console.log("A Fonksiyonu")
}

function fnB() {
    console.log("B Fonksiyonu")
}

function fnC() {
    console.log("C Fonksiyonu")
}

fnA()
fnB()
fnC()

//OBJE Kavramı
// key-value    
const student = {
    name: "Semra",
    age: 28,
    gender: "male",
    city: "Balıkesir",
    language: "Turkish",
    isMarried: true,
    programingLanguales: ["Flutter", "Dart", "Python", "Javascript"]
}

console.log("Öğrencinin adı: ", student.name)   
console.log("Öğrencinin bildiği programlar: ", student.programingLanguales)   
student.age = 30;
console.log(student.age)


