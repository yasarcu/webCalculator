function calcValue(value)
{
var x = eval(document.Calc.Input.value);

var y = Math.round(x*10000)/10000;
return (y);
}
