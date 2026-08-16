const select =document.getElementById('categorySelect');
const inputtype = document.getElementById('inputValue');
const fromUnit =document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const button = document.getElementById('convertBtn');
const result = document.getElementById('resultDisplay');
convertBtn.addEventListener('click',function(){alert('connected!');});
let valueInMetres;
let finalResult;
convertBtn.addEventListener('click',function(){
const userTypedText=inputValue.value;
const selectedFrom=fromUnit.value;
const selectedTo=toUnit.value;
const numericValue=parseFloat(inputValue.value);
  if(selectedFrom==="m")
  { valueInMetres=numericValue;}
  if(selectedFrom==="km")
 { valueInMetres=numericValue*1000;}
 if(selectedFrom==="ft")
  {valueInMetres=numericValue*0.3048;}
  if(selectedTo==="m")
  {valueInMetres=numericValue;}
  if(selectedTo==="km")
  {valueInMetres=numericValue*1000;}
  if(selectedTo==="ft")
  {finalResult=valueInMetres/0.3048;}
    if(selectedFrom==="g")
  {valueInGrams=numericValue;}
  if(selectedFrom==="kg")
  {valueInGrams=numericValue*1000;}
  if(selectedFrom==="lb")
  {valueInGrams=numericValue*453.592;}
  if(selectedTo==="g")
  {finalResult=valueInGrams;}
  if(selectedTo==="kg")
  {finalResult=valueInGrams/1000;}
  if(selectedTo==="lb")
  {finalResult=valueInGrams/453.592;}
    if(selectedFrom==="c")
  {valueInCelsius=numericValue;}
  if(selectedFrom==="f")
  {valueInCelsius=(numericValue-32)*5/9;}
  if(selectedFrom==="K")
  {valueInCelsius=numericValue-273.15;}
  if(selectedTo==="c")
  {finalResult=valueInCelsius;}
  if(selectedTo==="f")
  {finalResult=(valueInCelsius*9/5)+32;}
  if(selectedTo==="K")
  {finalResult=valueInCelsius+273.15;}
result.textContent="Result:"+finalResult;
});
categorySelect.addEventListener('change',function(){const selectedCategory = categorySelect.value;
if(selectedCategory==="length")
{fromUnit.innerHTML= `<option value="m">Metre</option>
    <option value="km">Kilometer</option>
    <option value="ft">Feet</option>`;
toUnit.innerHTML=`<option value="m">Metre</option>
    <option value="km">Kilometer</option>
    <option value="ft">Feet</option>`;}
else if(selectedCategory==="weight")
{fromUnit.innerHTML=`<option value="g">Grams</option>
<option value="kg">Kilograms</option>
<option value="lb">Pound</option>`;
toUnit.innerHTML=`<option value="g">Grams</option>;
<option value="kg">Kilograms</option>
<option value="lb">Pound</option>`;}
else if(selectedCategory==="temperature")
{fromUnit.innerHTML=`<option value="c">celsius</option>
<option value="f">fahrenheit</option>
<option value="K">Kelvin</option>`;
toUnit.innerHTML=`<option value="c">celsius</option>
<option value="f">fahrenheit</option>
<option value="K">Kelvin</option>`;}
});
