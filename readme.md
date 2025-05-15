# JavaScript Değişkenleri: Kapsamlı Rehber

JavaScript'te değişkenler, verilerinizi depolamak ve yönetmek için kullanılan temel yapı taşlarıdır. Bu yazıda JavaScript değişkenleri hakkında bilmeniz gereken tüm temel bilgileri paylaşacağım.

## Değişken Tanımlama

JavaScript'te değişkenleri tanımlamak için üç farklı anahtar kelime kullanılabilir:

- `var`: Geleneksel değişken tanımlama yöntemi  
- `let`: ES6 (ECMAScript 2015) ile gelen, blok kapsamlı değişkenler için  
- `const`: Değeri değiştirilemeyen (sabit) değişkenler için  

```javascript
var yas = 25;
let isim = "Ahmet";
const PI = 3.14;
Değişken İsimlendirme Kuralları
Değişken isimleri harf, alt çizgi (_) veya dolar işareti ($) ile başlamalıdır

Rakamla başlayamaz

Türkçe karakterler kullanılabilir ancak önerilmez

JavaScript'in ayrılmış kelimeleri (if, for, while vb.) değişken ismi olarak kullanılamaz

Büyük-küçük harf duyarlıdır (isim ve İsim farklı değişkenlerdir)

Değişken Kapsamı (Scope)
var ile Tanımlanan Değişkenler
Fonksiyon kapsamına sahiptir

Tanımlandığı fonksiyon içinde erişilebilir

Blok kapsamı yoktur (örneğin if, for, while blokları içinde tanımlansa bile dışarıdan erişilebilir)

Değişken yükseltme (hoisting) özelliğine sahiptir

let ve const ile Tanımlanan Değişkenler
Blok kapsamına sahiptir

Sadece tanımlandıkları blok içinde erişilebilir

Değişken yükseltme özelliği yoktur (kullanmadan önce tanımlanmalıdır)

Değişken Türleri
JavaScript dinamik tipli bir dil olduğundan, değişkenler herhangi bir veri türünü tutabilir:

String: Metinsel değerler ("Merhaba")

Number: Sayısal değerler (42, 3.14)

Boolean: Mantıksal değerler (true, false)

Array: Diziler ([1, 2, 3])

Object: Nesneler ({ad: "Ali", yas: 30})

null: Boş değer

undefined: Tanımlanmamış değer

Symbol: Benzersiz ve değiştirilemez değerler (ES6)

BigInt: Büyük tam sayılar (ES2020)

Değişken Kullanım Örnekleri
javascript
Kopyala
Düzenle
// Değişkenlerin değerlerini değiştirme
let sayac = 0;
sayac = sayac + 1; // veya sayac++

// const ile tanımlanan değişkenlerin değeri değiştirilemez
const MAKSIMUM = 100;
// MAKSIMUM = 200; // Hata verir!

// Ancak const ile tanımlanan nesnelerin özellikleri değiştirilebilir
const kullanici = { ad: "Mehmet" };
kullanici.ad = "Ali"; // Bu geçerlidir
// kullanici = { ad: "Veli" }; // Bu geçerli değildir

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
    var x = 2; // Aynı x değişkeni
    console.log(x); // 2
  }
  
  console.log(x); // 2
}

// let örneği - blok kapsamı
function letOrnegi() {
  let y = 1;
  
  if (true) {
    let y = 2; // Farklı y değişkeni
    console.log(y); // 2
  }
  
  console.log(y); // 1
}

// const örneği
const SABIT = 5;
// SABIT = 10; // Hata!