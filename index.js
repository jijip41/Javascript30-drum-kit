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
  switch(e.code) {
    case 'KeyA':
    a.classList.add('press');
    soundA.currentTime = 0;
    soundA.play();
    break;
    case 'KeyS':
    s.classList.add('press');
    soundS.currentTime = 0;
    soundS.play();
    break;
    case 'KeyD':
    d.classList.add('press');
    soundD.currentTime = 0;
    soundD.play();
    break;
    case 'KeyF':
    f.classList.add('press');
    soundF.currentTime = 0;
    soundF.play();
    break;
    case 'KeyG':
    g.classList.add('press');
    soundG.currentTime = 0;
    soundG.play();
    break;
    case'KeyH':
    h.classList.add('press');
    soundH.currentTime = 0;
    soundH.play();
    break;
    case 'KeyJ':
    j.classList.add('press');
    soundJ.currentTime = 0;
    soundJ.play();
    break;
    case 'KeyK':
    k.classList.add('press');
    soundK.currentTime = 0;
    soundK.play();
    break;
    case 'KeyL':
    l.classList.add('press');
    soundL.currentTime = 0;
    soundL.play();
    break;
  }})


  box.forEach(k => k.addEventListener('transitionend', (e) => {
      box.forEach(k => k.classList.remove('press'));
  }))

