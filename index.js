'use strict'

const soundA = new Audio('/sounds/clap.wav');
const soundS = new Audio('/sounds/hihat.wav');
const soundD = new Audio('/sounds/kick.wav');
const soundF = new Audio('/sounds/openhat.wav');
const soundG = new Audio('/sounds/boom.wav');
const soundH = new Audio('/sounds/ride.wav');
const soundJ = new Audio('/sounds/snare.wav');
const soundK = new Audio('/sounds/tink.wav');
const soundL = new Audio('/sounds/tom.wav');


const a = document.querySelector('.a');
const s = document.querySelector('.s');
const d = document.querySelector('.d');
const f = document.querySelector('.f');
const g = document.querySelector('.g');
const h = document.querySelector('.h');
const j = document.querySelector('.j');
const k = document.querySelector('.k');
const l = document.querySelector('.l');


const box = document.querySelectorAll('.box');
console.log(box);


document.addEventListener('keydown', (e)=> {
  if(e.code === 'KeyA') {
    a.classList.add('press');
    soundA.currentTime = 0;
    soundA.play();
  } else if(e.code === 'KeyS') {
    s.classList.add('press');
    soundS.currentTime = 0;
    soundS.play();
  } else if(e.code === 'KeyD') {
    d.classList.add('press');
    soundD.currentTime = 0;
    soundD.play();
  } else if(e.code === 'KeyF') {
    f.classList.add('press');
    soundF.currentTime = 0;
    soundF.play();
  } else if(e.code === 'KeyG') {
    g.classList.add('press');
    soundG.currentTime = 0;
    soundG.play();
  } else if(e.code === 'KeyH') {
    h.classList.add('press');
    soundH.currentTime = 0;
    soundH.play();
  } else if(e.code === 'KeyJ') {
    j.classList.add('press');
    soundJ.currentTime = 0;
    soundJ.play();
  } else if(e.code === 'KeyK') {
    k.classList.add('press');
    soundK.currentTime = 0;
    soundK.play();
  } else if(e.code === 'KeyL') {
    l.classList.add('press');
    soundL.currentTime = 0;
    soundL.play();
  }})


  box.forEach(k => k.addEventListener('transitionend', (e) => {
  
      box.forEach(k => k.classList.remove('press'));
  

  }))


    
// for(let elem in box)addEventListener('click', () => {
//   addClassName(elem);
// })

// function addClassName(element) {
//   element.addClassName('playing');
// }

// function play(sound) {
//   sound.play();
// }