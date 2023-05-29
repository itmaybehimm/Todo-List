let clicked=false;
let mainCircle=document.querySelector('.main-circle')
mainCircle.addEventListener('click',handleAnime)

function handleAnime(){
  const smallCircles=document.querySelectorAll(".small-circle")
  const sideButtons=document.querySelectorAll(".side-button")

  smallCircles.forEach(circle => {
    if(!clicked){
      mainCircle.style.transform="rotate(315deg)"
      circle.classList.add('small-circle-animation')
      circle.classList.remove('small-circle-animation2')
      circle.style.opacity='0';
      circle.style.transform='translateY(calc(var(--order) * -30px))'
      }
    else{
      mainCircle.style.transform="rotate(0deg)"
      circle.style.opacity='1';
      circle.style.transform='translateY(0)'
      circle.classList.remove('small-circle-animation')
      circle.classList.add('small-circle-animation2')
      }
    }
  )

  sideButtons.forEach(button => {
    if(clicked){
      button.style.transform='translateY(-22vh)'
      }
    else{
      button.style.transform='translateY(0)'
      }
    }
  )

  clicked=!clicked
}
