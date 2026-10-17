const flashcard=document.getElementById("flashcard");
const flipbtn =document.getElementById("flip-btn");
flipbtn.addEventListener('click',function  (){
flashcard.classList.toggle('flipped')
});
const deck=[
  {front:"Your term or question1",back:"Your definition or answer1"},
  {front:"Your term or question2",back:"Your definitionconst or answer2"}
];
let currentIndex=0;
const cardFront=document.getElementById("cardFront");
const cardBack=document.getElementById("cardBack");
function updateCard(){
  cardFront.textContent= deck[currentIndex].front;
  cardBack.textContent= deck[currentIndex].back;
}
updateCard();

  


  
