let bodyElement=document.querySelector('body');

let smallCircles=document.querySelectorAll('.small-circle');

let nonOverlayElement=document.querySelector('.non-overlay');

let overlayElement=document.querySelector('.add-overlay');


let colors={
  mainBlue : "#29303C",
  white:"#EEEEEE",
  work:"#4a5d29",
  personal:"#389bb2",
  health:"#2F4F4F",
  school:"#008080"
};


document.querySelector('.delete-button').addEventListener('click',handleCancelOverlay);


smallCircles.forEach((circle)=>{
  circle.addEventListener('click',()=>handleSmallCircleClick(circle))});

function handleSmallCircleClick(circle){
  nonOverlayElement.classList.add('non-overlay-hidden')
  overlayElement.classList.remove('add-overlay-hidden')
  bodyElement.addEventListener('keydown',handleCancelOverlay);
  colorOverlay(circle)
}

function handleCancelOverlay(event=null){
  console.log(event)
  if((event.keyCode===27)||(event.type==='click')){
    nonOverlayElement.classList.remove('non-overlay-hidden')
    bodyElement.removeEventListener('keydown',handleCancelOverlay)
    overlayElement.classList.add('add-overlay-hidden')
  }
}

function colorOverlay(element){
  let colorOverlayElement=document.querySelector('.color-section-overlay')
  if(element.classList.contains("add-work")){
    colorOverlayElement.style.backgroundColor=colors.work;
  }
  if(element.classList.contains('add-personal')){
    console.log('personal');
    colorOverlayElement.style.backgroundColor=colors.personal;
  }
   if(element.classList.contains('add-health')){
    console.log('health');
    colorOverlayElement.style.backgroundColor=colors.health;
  }
   if(element.classList.contains("add-school")){
    console.log('school');
    colorOverlayElement.style.backgroundColor=colors.school;
  }
}