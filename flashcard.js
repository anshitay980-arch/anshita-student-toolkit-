const flashcard=document.getElementById("flashcard");
const flipbtn =document.getElementById("flipbtn");
flipbtn.addEventListener('click',function  (){
flashcard.classList.toggle('flipped')
});
deck=[
  {front:"Your term or question1",back:"Your definition or answer1"},
  {front:"Your term or question2",back:"Your definitionconst or answer2"}
];
let currentIndex=0;
const cardFront=document.getElementById("cardFront");
const cardBack=document.getElementById("cardBack");

  


  
