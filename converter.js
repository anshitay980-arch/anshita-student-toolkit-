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
  {valueInMetres=numericValue*0.3048;}alert("Result:"+finalResult);
});
