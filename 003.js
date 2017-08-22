/*
 *  The prime factors of 13195 are 5, 7, 13 and 29.
 *
 *  What is the largest prime factor of the number 600851475143?
 *
 */

(function largestPrimeFactor(num) {
   let all = [],
      final = num,
      factor = 2;

   while (final > factor) {
      if (final % factor === 0) {
         all.push(factor);
         final /= factor;
      }
      factor++;
   }
   all.push(factor);
   return all.slice(-1)[0];
})(600851475143);
