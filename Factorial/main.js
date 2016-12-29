function factorial(n) {
var fact=1;
    if(n<0 || n==0)
        return null;            
    else {
        for(var i=1; i<=n;i++)
            {
                fact=fact*i;
            }
    }
    return fact;
}