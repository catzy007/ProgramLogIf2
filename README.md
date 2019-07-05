## ProgramLogIf 2 - demi nilai logif yang lebih baik :thumbsup:

### Tentang
Program ini dibuat berdasarkan salah satu materi Logika Informatika yaitu `First Order Logic` atau logika predikat 
digabungkan dengan Rule-Based [Natural Languange Processing](https://en.wikipedia.org/wiki/Natural_language_processing) 
program ini dapat mengubah bahasa literal menjadi bahasa predikat.

### Penggunaan
Cukup buka link berikut <https://catzy007.github.io/logif2/>

Contoh literal : 
```
Paling sedikit ada satu X dimana X adalah mahasiswa dan X adalah intelektual
```
Maka input berupa : 
```
Paling sedikit ada satu X dimana 
X adalah mahasiswa 
dan X 
adalah intelektual
```
output berupa :
```
∃x.mahasiswa(x)∧intelektual(x)
```

### Deployment
* Clone [repo ini](https://github.com/catzy007/ProgramLogIf2/)
* Copy ke `htdocs`

### Kekurangan
* User diwajibkan untuk membagi kalimat literal dengan 1x enter (\n)
* Negasi yang di dukung hanya (tidak, bukan, tidak benar)
* Kata penghubung kalimat yang yang di dukung belum lengkap
