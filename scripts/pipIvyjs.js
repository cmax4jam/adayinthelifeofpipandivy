const buildGame = document.getElementById('gameboard');
const catName = localStorage.getItem('catChoice');
let Objects = '';
let catObjects = {};

function buildGame() {
  const objects = ['couch', 'bed', 'counter', 'window', 'water bowl', 'food bowl', 'bean bag', 'closet', 'bathroom door', 'litter box', 'plants'];
  objects.forEach(item => {
    let d = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = item;
    d.setAttribute(objects);
    d.appendChild(h3);
    gameboard.appendChild(d);
    d.addEventListener('click', (objects) => {
      catObjects = item;
      updateGame();
    });
  });

  
    if (catName == 'pip') {
      catObjects = {
      couch: ['loaf', 'scratch', 'hide underneath', 'get scared of'],
      bed: ['loaf', 'tear at quilt', 'meow at Ivy'],
      counter: ['loaf', 'jump to window'],
      window: ['watch birds', 'jump on sill'],
      waterBowl: ['have a little drink', 'get wet'],
      foodBowl: ['snack', 'throw up food'],
      beanBag: ['loaf', 'check on hidden hair elastics'],
      closet: ['get fur on clothes', 'loaf on purses', 'play with the belts'],
      bathroomDoor: ['meow at door', 'break in'],
      litterBox: ['poop', 'sleep in', 'hide from ivy'],
      plants: ['chew and throw up', 'circle suspiciously', 'get scared of']
      };
    } else if (catName == 'ivy') {
      catObjects = {
        couch: ['loaf', 'scratch', 'make biscuits', 'meow at aimlessly'],
        bed: ['loaf', 'mess up blankets', 'cuddle with Pip'],
        counter: ['knock over cups', 'play with stove'],
        window: ['watch birds', 'scratch screen', 'climb into'],
        waterBowl: ['have a little drink', 'get water everywhere'],
        foodBowl: ['snack', 'get food everywhere'],
        beanBag: ['nap', 'make biscuits', 'jump on'],
        closet: ['mess up clothes', 'plan world domination', 'play with the belts'],
        bathroomDoor: ['scratch', 'break in'],
        litterBox: ['poop', 'drag poop everywhere', 'dig around'],
        plants: ['sniff', 'knock over', 'climb']

      };
    }
  }