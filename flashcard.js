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
const nextbtn =document.getElementById ("next-btn");
nextbtn.addEventListener('click',function
(){
  if(currentIndex < deck.length-1)
  {
     currentIndex=currentIndex +1;
  updateCard();
  }
});
const prevbtn=document.getElementById ("prev-btn");
prebtn.addEventListener('click',function(){
  if(currentIndex >0)
  {
     currentIndex =currentIndex-1;
  updateCard();
  }
});
const deletebtn=document.getElementById ("delete-btn");
deletebtn.addEventListener('click',function(){
  deck.splice(currentIndex, 1);
  if(currentIndex >=deck.length)
  {
  currentIndex--;
  }
  updateCard ();
});
const frontinput=document.getElementById ("front-input");
const backinput=document.getElementById ("back-input");
const addbtn=document.getElementById ("add-btn");
addbtn.addEventListener('click',function(){
 const frontVal =frontinput.value;
  const backVal=backinput.value;
  deck.push(
    {front:frontVal , back:backVal}
  );
  currentIndex = deck.length - 1;
  updateCard ();
  frontinput.value="";
  backinput.value="";
});

  
