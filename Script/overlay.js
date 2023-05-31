const bodyElement=document.querySelector('body');

const smallCircles=document.querySelectorAll('.small-circle');

const nonOverlayElement=document.querySelector('.non-overlay');

const overlayElement=document.querySelector('.add-overlay');

const enterButton = document.querySelector('.enter-button');

let clickedCircle=null



document.querySelector('.delete-button').addEventListener('click',handleCancelOverlay);


smallCircles.forEach((circle)=>{
  circle.addEventListener('click',()=>handleSmallCircleClick(circle))});

function handleSmallCircleClick(circle){
  nonOverlayElement.classList.add('non-overlay-hidden')
  overlayElement.classList.remove('add-overlay-hidden')

  clickedCircle=circle

  enterButton.addEventListener('click', clickCircleHandler);


  bodyElement.addEventListener('keydown',handleCancelOverlay);
  colorOverlay(circle)
}

function clickCircleHandler(){
  return handleAddTodo(clickedCircle);
}


function handleCancelOverlay(event){
  if((event.keyCode===27)||(event.type==='click')){
    removeOverlay();
  }
  if((event.keyCode===13)){
    handleAddTodo(clickedCircle);
    removeOverlay();
  }
}

function removeOverlay(){
  nonOverlayElement.classList.remove('non-overlay-hidden')
  enterButton.removeEventListener('click', clickCircleHandler);
  bodyElement.removeEventListener('keydown',handleCancelOverlay)
  overlayElement.classList.add('add-overlay-hidden')
}

function colorOverlay(element){
  const colorOverlayElement=document.querySelector('.color-section-overlay')
  const typeTodo= checktType(element)
  switch(typeTodo){
    case 0:
      colorOverlayElement.style. backgroundColor=colors.work;  
      break;
    case 1:
      colorOverlayElement.style.backgroundColor=colors.personal;
      break;
    case 2:
      colorOverlayElement.style.backgroundColor=colors.health;
      break;
    case 3:
      colorOverlayElement.style.backgroundColor=colors.school;
      break;
  }
}


