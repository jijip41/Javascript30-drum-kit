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


a.addEventListener('click', ()=> {
  soundA.play();
})

s.addEventListener('click', ()=> {
  soundS.play();
})

d.addEventListener('click', ()=> {
  soundD.play();
})

f.addEventListener('click', ()=> {
  soundF.play();
})

g.addEventListener('click', ()=> {
  soundG.play();
})

h.addEventListener('click', ()=> {
  soundH.play();
})

j.addEventListener('click', ()=> {
  soundJ.play();
})

k.addEventListener('click', ()=> {
  soundK.play();
})

l.addEventListener('click', ()=> {
  soundL.play();
})