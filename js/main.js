const bars = document.querySelector('#bars');
const nav = document.querySelector('.nav-mobile nav');
const project = document.querySelectorAll('.project');
const viewProject = document.querySelectorAll('.view-project');
const fechar = document.querySelector('.close');
const buttonInfo = document.querySelectorAll('.info')
const fecharInfo = document.querySelectorAll('.close-info');
const viewInfo = document.querySelectorAll('.informacoes');
const setaLeft = document.querySelectorAll('.seta-left')
const setaRight = document.querySelectorAll('.seta-right')
const slidesOne = document.querySelectorAll('.carrossel-item1');
const slidesTwo = document.querySelectorAll('.carrossel-item2');
const slidesThree = document.querySelectorAll('.carrossel-item3');

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('teste', window.scrollY > 0);
})

function viewOn (n) {
  viewInfo[n].style.display = 'flex';
  fechar.style.zIndex = '2';
}

function viewOff (n) {
  viewInfo[n].style.display = 'none';
  fechar.style.zIndex = '3';
}

function displayBlock (n) {
  viewProject[n].style.display = 'block';
  fechar.style.fontSize = "40px";
}

function displayNone () {
  for(i of viewProject) {
    i.style.display = 'none';
  }
  
  fechar.style.fontSize = '0px';
}

buttonInfo[0].onclick = event => viewOn(0);
buttonInfo[1].onclick = event => viewOn(1);
buttonInfo[2].onclick = event => viewOn(2);

fecharInfo[0].onclick = event => viewOff(0);
fecharInfo[1].onclick = event => viewOff(1);
fecharInfo[2].onclick = event => viewOff(2);

project[0].onclick = event => displayBlock(0);
project[1].onclick = event => displayBlock(1);
project[2].onclick = event => displayBlock(2);

fechar.onclick = event => displayNone();

bars.onclick = () => { 
  window.getComputedStyle(nav).height == "0px" ? 
  nav.style.height = "100vh" 
  : nav.style.height = "0vh";
}

let currentSlideIndex = 0;

function proximo (carrossel) {  
  if(carrossel.length == currentSlideIndex) currentSlideIndex = 0;

  carrossel.forEach(slide => {
    slide.classList.remove('carrossel-item-visible');
  })
  
  carrossel[currentSlideIndex].classList.add('carrossel-item-visible');
}

function anterior (carrossel) {
  if(currentSlideIndex < 0) currentSlideIndex = carrossel.length - 1;

  carrossel.forEach(slide => {
    slide.classList.remove('carrossel-item-visible');
  })

  carrossel[currentSlideIndex].classList.add('carrossel-item-visible');
}

setaRight.forEach(rigth => {
  rigth.addEventListener('click', () => {
    currentSlideIndex++;
    
    if(rigth === setaRight[0]) proximo(slidesOne);
    if(rigth === setaRight[1]) proximo(slidesTwo);
    if(rigth === setaRight[2]) proximo(slidesThree);
  })
});

setaLeft.forEach(left => {
  left.addEventListener('click', () => {
    currentSlideIndex--;
    
    if(left === setaLeft[0]) anterior(slidesOne);
    if(left === setaLeft[1]) anterior(slidesTwo);
    if(left === setaLeft[2]) anterior(slidesThree);
  })
});