//Performans Sonuçları
/* 
1.Option1 (çift for döngüsü)
2.Option3(map - for döngüsü)
3.Option2 (foreach döngüsü)
*/
var array = [0, -1, 2, -3, 1, 4];
var target = 1;
function Option1(arr, target) {
  // Dizi içindeki her eleman gezilmesi için for kullanıldı

  for (i = 0; i < arr.length - 1; i++) {
    // Dizi içindeki her eleman gezilmesi için for kullanıldı
    for (j = i + 1; j < arr.length; j++) {
      // Eşitlik Kontrolü yapıldı

      if (arr[i] + arr[j] == target) {
        //eşit ise indexleri konsola yazıldı.
        console.log(`[${i},${j}]`);
      }
    }
  }
}
console.log("Option1");
Option1(array, target);

function Option2(arr, target) {
  //foreach ile tüm dizideki tüm elemanlar taranarak

  arr.forEach((element, index) => {
    //foreach ile tüm dizideki tüm elemanlar taranarak

    arr.forEach((element2, index2) => {
      //Eşitlik kontrolü yapıldı

      if (index2 > index && element + element2 == target) {
        //Eşit ise konsola yazıldı

        console.log(`[${index},${index2}]`);
      }
    });
  });
}
console.log("Option2");
Option2(array, target);

function Option3(arr, target) {
  // yeni Map oluşturup key value tipinde değişken atayacağız
  const hashMap = new Map();

  // ilk dizideki her bir elemanı gezmek için for döngüsü oluşturdum.
  for (let i = 0; i < arr.length; i++) {
    // hedef değişkenle herbir elemanı çıkarıp farkını aldım
    let difference = target - arr[i];
    //herbir elemanı yeni mape attım
    hashMap.set(arr[i].toString(), arr[i]);
    //eğer fark değişkeni yeni map te varsa konsola yazdırdım.
    if (hashMap.has(difference.toString())) {
      console.log(`[${arr.indexOf(difference)},${i}]`);
    }
  }
}
console.log("Option3");
Option3(array, target);
