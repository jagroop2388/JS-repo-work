console.log (null > 0)
console.log (null == 0)
console.log (null >= 0)

console.log(undefined > 0)
console.log (undefined == 0)
console.log (undefined >= 0)

/*
The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, 
treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

Anything compared to undefied will output as false sicne no value defined.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, 
they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.


null == null; // true
null == undefined; // true
Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.

*/