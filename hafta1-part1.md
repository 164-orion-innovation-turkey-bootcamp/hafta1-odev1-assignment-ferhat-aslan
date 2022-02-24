# Part 1

<strong>1-) Bir sayı dizisi ve hedef değeri veriliyor. Toplamı, hedefe eşit olan ikililerin indexlerini dönen fonksiyonu yazınız.</strong>

## Performans Sonuçları
- 1.Option1 (sadece for döngüsü)
- 2.Option3(map - for döngüsü)
- 3.Option2 (foreach döngüsü)
Örnek 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Çünkü nums[0] + nums[1] == 9,  return [0, 1].

Örnek 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Örnek 3:

Input: nums = [3,3], target = 6
Output: [0,1]