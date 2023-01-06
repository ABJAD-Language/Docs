---
sidebar_position: 2
---

# Prime Numbers

Prime numbers are the numbers that are not multiple of any number other than 1.

The following example prints the prime numbers between 1 and 100.

```abjad
دالة هل_عدد_أولي (رقم ن): منطق {
  كرر (متغير رقم س = 2؛ س < ن؛ س++) {
    إذا (ن % س == 0) {
      أرجع خطأ؛
    }
  }
  أرجع صحيح؛
}

كرر (متغير رقم س = 1؛ س <= 100؛ س++) {
  إذا (هل_عدد_أولي(س)) {
    أكتب(س)؛
  }
}
```