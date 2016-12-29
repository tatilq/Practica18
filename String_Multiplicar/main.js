function stringMultiplicar(n) {
var r1=0;
var resultado="";
    for(var i=1; i<=10 ;i++)
        {
            r1=n*i;
            resultado +=n+"x"+i+"="+r1;
            if((i+1)<=10)
                {
                   resultado +="/";
                }
        }
    return resultado;

}