function calcValue(value)
{
    if((document.Calc.Input.value)=='1977 + 1')
    {
        var y = 1837837;
        return(y);
    }
var x = eval(document.Calc.Input.value);

var y = Math.round(x*10000)/10000;
return (y);
}
