/*
 *  A palindromic number reads the same both ways. The largest palindrome 
 *  made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 *  Find the largest palindrome made from the product of two 3-digit numbers.
 *
 */

(function highestPal(num) {
   let pal = 0;

   function checkPal(arg) {
      var str = arg;
      if (typeof str !== 'string') {
         str = str.toString();
      }
      return str === str.split('').reverse().join('') ? true : false;
   }


   for (let i = 100; i < num; i++) {
      for (let j = i; j < num; j++) {
         let product = i * j;
         if (checkPal(product) && product > pal) {
            pal = product;
         }
      }
   }
   return pal;
})(1000);
