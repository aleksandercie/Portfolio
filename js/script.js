var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  progress = document.querySelector('.progress'),
  scroll;

document.addEventListener('scroll', function() {
  scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  progress.style.setProperty('--scroll', scroll + '%');
});

var i = 0;
var j = 0;
var name = "Aleksander Gąsior"; 
var profession ="Front-end Developer"

function typeProfession() {
  if (j < profession.length) {
    document.getElementById("profession").innerHTML += profession.charAt(j);
    j++;
    setTimeout(typeProfession, 100);
  }
}
typeProfession();

function typeName() {
  if (i < name.length) {
    document.getElementById("name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeName, 100);
  }
}
typeName();