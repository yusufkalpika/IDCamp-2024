// Belajar JavaScrip
console.log("Hallo Selamat Datang");
console.log("Belajar JavaScrip \nby Dicoding");

// const = tidak dapat diubah
// let = dapat diubah
const PI = 3.14;
console.log(PI);

const id = 017210002;
console.log(id);

let username = "Yusuf";
console.log("Sebelum diubah :", username);
username = "Dresthia Yusuf";
console.log("Setelah diubah :", username);
const tulis = `Nama saya ${username}.`;
console.log(tulis);

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;
console.log(text);

//Boolean
const completed = true;
const passed = false;
console.log(completed, passed);

const isGreater = 5 > 2;
console.log(isGreater);

const suhuCelcius = 30;
const suhuFahrenheit = 9/5*suhuCelcius+32;
console.log(suhuFahrenheit);

// Deklarasi fungsi
function konversiCelciusToFahrenheit(temperatur) {
    const temperaturInFahrenheit = 9/5*temperatur+32;
    console.log("Hasil Konversi :", temperaturInFahrenheit);
}
const temperaturInCelcius = 90;
konversiCelciusToFahrenheit(temperaturInCelcius);
konversiCelciusToFahrenheit(80);

// Conditional flow - If Statement
const nilai = 74;
if (nilai >=75) {
    console.log("Selamat, Anda Lulus Ujian");
}
else if (nilai >50) {
    console.log("Semangat, Sedikit Lagi")
}
else {
    console.log("Semangat, Coba Lagi");
}

// Pengganti dengan cara ternary operator (?)
const price = 100000;
const isMember = true;
const discount = isMember ? 0.5 : 0;
console.log(`Anda mendapatkan diskon ${discount * price}`);
