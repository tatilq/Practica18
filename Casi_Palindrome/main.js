function casiPalindrome(palabra) {
    var tam = palabra.length;
    var palindrome;
    var conta = 0;
     for (i=0, j=tam-1; i<tam/2, j>tam/2; i++, j--){
         if(palabra[i] !=palabra[j]){
             conta++;
         }
      }
         if(conta<=2){
            palindrome=true;
         }else{
             palindrome=false;
         }
     return palindrome;
}