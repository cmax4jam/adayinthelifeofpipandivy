const buildGame = document.getElementById('gameboard');
const catName = localStorage.getItem('catChoice');


let gameboard = document.getElementById('gameboard');

function buildGame() {
  let catObjects = {};
  const objects = ['couch', 'bed', 'counter', 'window', 'water bowl', 'food bowl', 'bean bag', 'closet', 'bathroom door', 'litter box', 'plants'];
  objects.forEach(item => {
    let d = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = item;
    d.setAttribute('Objects', item);
    d.appendChild(h3);
    gameboard.appendChild(d);
    d.addEventListener('click', () => {
      catObjects = item;
      updateGame();
    });
  });

  let catName = 'pip';

  if (catName == 'pip') {
    catObjects = {
      couch: ['loaf', 'scratch', 'hide underneath', 'get scared of'],
      bed: ['loaf', 'tear at quilt', 'meow at Ivy'],
      counter: ['loaf', 'jump to window'],
      window: ['watch birds', 'jump on sill'],
      'water bowl': ['have a little drink', 'get wet'],
      'food bowl': ['snack', 'throw up food'],
      'bean bag': ['loaf', 'check on hidden hair elastics'],
      closet: ['get fur on clothes', 'loaf on purses', 'play with the belts'],
      'bathroom door': ['meow at door', 'break in'],
      'litter box': ['poop', 'sleep in', 'hide from ivy'],
      plants: ['chew and throw up', 'circle suspiciously', 'get scared of']
    };
  } else if (catName == 'ivy') {
    catObjects = {
      couch: ['loaf', 'scratch', 'make biscuits', 'meow at aimlessly'],
      bed: ['loaf', 'mess up blankets', 'cuddle with Pip'],
      counter: ['knock over cups', 'play with stove'],
      window: ['watch birds', 'scratch screen', 'climb into'],
      'water bowl': ['have a little drink', 'get water everywhere'],
      'food bowl': ['snack', 'get food everywhere'],
      'bean bag': ['nap', 'make biscuits', 'jump on'],
      closet: ['mess up clothes', 'plan world domination', 'play with the belts'],
      'bathroom door': ['scratch', 'break in'],
      'litter box': ['poop', 'drag poop everywhere', 'dig around'],
      plants: ['sniff', 'knock over', 'climb']
    };
  }
}