JavaScript Değişkenleri: Kapsamlı Rehber
JavaScript'te değişkenler verilerini depolamak ve yönetmek için kullandığın temel yapı taşlarıdır bunlar discord.js kütüphanesini kullanırken işine yaracak kardeş öyle işte

Değişken Tanımlama
JavaScript’te üç tane anahtar kelime var değişken tanımlamak için:

var: Eski usul geleneksel yöntem

let: ES6 ile gelen blok içinde geçerli olan değişkenler

const: Değeri değişmeyen sabit değişkenler

javascript
Kopyala
Düzenle
var yas = 25;
let isim = "Ahmet";
const PI = 3.14;
Değişken İsimlendirme Kuralları
İsimler harf, alt çizgi (_) veya dolar işareti ($) ile başlamalıdır

Rakamla başlayamazsın

Türkçe karakter kullanabilirsin ama tavsiye edilmez

if, for, while gibi kelimeler değişken ismi olamaz

Büyük-küçük harf farkı var: isim ile İsim farklıdır

Değişken Kapsamı (Scope)
var ile tanımlananlar:

Fonksiyon içinde geçerli

Blok içinde tanımlansa da blok dışından erişilebilir

Hoisting (yukarı çekilme) var, yani değişkeni tanımlamadan önce bile ulaşabilirsin (ama undefined olur)

let ve const ile tanımlananlar:

Sadece tanımlandıkları blok içinde geçerli

Hoisting yok, önce tanımlaman lazım

Değişken Türleri
JS dinamik dil, istediğin her türü tutabilir:

String: "Merhaba" gibi metin

Number: 42, 3.14 gibi sayılar

Boolean: true veya false

Array: [1, 2, 3] gibi diziler

Object: {ad: "Ali", yas: 30} gibi nesneler

null: Boş değer

undefined: Tanımlanmamış

Symbol: ES6’dan özel ve değiştirilemez değerler

BigInt: Çok büyük tam sayılar (ES2020)

Değişken Kullanım Örnekleri
javascript
Kopyala
Düzenle
// Değişkenlerin değerini değiştirmek
let sayac = 0;
sayac = sayac + 1;  // ya da sayac++;

// const ile sabit değişken tanımlanır, değeri değişmez
const MAKSIMUM = 100;
// MAKSIMUM = 200; // Hata verir, izin yok!

// Ama const ile tanımlanan nesnenin içi değiştirilebilir
const kullanici = { ad: "Mehmet" };
kullanici.ad = "Ali"; // Bu olur
// kullanici = { ad: "Veli" }; // Bu olmaz, komple değiştirilemez

// Birden fazla değişken tanımlama
let a = 5, b = 10, c = 15;

// Değer atamadan değişken tanımlama
let sonuc;
let, var ve const Arasındaki Farklar
javascript
Kopyala
Düzenle
// var örneği - fonksiyon kapsamı
function varOrnegi() {
  var x = 1;

  if (true) {
    var x = 2; // Aynı x değişkeni, üsttekini ezer
    console.log(x); // 2
  }

  console.log(x); // 2, blok dışından da erişilir
}

// let örneği - blok kapsamı
function letOrnegi() {
  let y = 1;

  if (true) {
    let y = 2; // Bu farklı bir y değişkeni, sadece if içinde geçerli
    console.log(y); // 2
  }

  console.log(y); // 1, blok dışındaki y farklı
}

// const örneği
const SABIT = 5;
// SABIT = 10; // Hata verir, sabit değiştirilemez!