function casiPalindrome(palabra) {
    var operacion="";
    var n=0;
    for(var c=0; c<palabra.length; c++)
    {                   
            if(palabra[c]!=0)
            {
                operacion[c]=palabra[c];
                n=n+1;                          
            }
            else
                {
                    return false;
                }         
    }
    for(var i=0; i<n; i++){
        for(var a=n-1; a>=0; a--){
            if(operacion[i]!=operacion[a]){
                return false;
            }
            else
                {
                    return true;
                }
        }
    }
}