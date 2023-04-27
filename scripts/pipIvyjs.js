const gameboard = document.getElementById('gameboard');
const catName = localStorage.getItem('catChoice');
let catObjects = [];
if (catName == 'pip' ) {
  catObjects = [
    { value: 'couch', label: 'Couch', array: ['loaf', 'scratch', 'hide underneath', 'get scared of'] },
    { value: 'bed', label: 'Bed', array: ['loaf', 'tear at quilt', 'meow at Ivy'] }, 
    { value: 'counter', label: 'Counter', array: ['loaf', 'jump to window'] },
    { value: 'window', label: 'Window', array: ['watch birds', 'jump on sill'] },
    {value: 'water bowl', label: 'water bowl', array: ['have a little drink', 'get wet'] },
    {value: 'food bowl', label: 'food bowl', array: ['snack', 'throw up food'] },
    {value: 'bean bag', label: 'Bean bag', array:['loaf', 'check on hidden hair elastics'] },
    {value: 'closet', label: 'Closet', array: ['get fur on clothes', 'loaf on purses', 'play with the belts'] },
    {value: 'bathroom door', label: 'bathroom door', array: ['meow at door', 'break in'] },
    {value: 'litter box', label: 'Litter box', array: ['poop', 'sleep in', 'hide from ivy'] },
    {value: 'plants', label: 'Plants', array: ['chew and throw up', 'circle suspiciously', 'get scared of'] }
  ];
} else if (catName == 'ivy') {
  catObjects = [
    { value: 'couch', label: 'Couch', array:  ['loaf', 'scratch', 'make biscuits', 'meow at aimlessly'] },
    { value: 'bed', label: 'Bed', array: ['loaf', 'mess up blankets', 'cuddle with Pip'] },
    { value: 'counter', label: 'Counter', array: ['knock over cups', 'play with stove'] },
    { value: 'window', label: 'Window', array: ['watch birds', 'scratch screen', 'climb into'] },
    {value: 'water bowl', label: 'water bowl', array: ['have a little drink', 'get water everywhere'] },
    {value: 'food bowl', label: 'food bowl', array: ['snack', 'get food everywhere'] },
    {value: 'bean bag', label: 'Bean bag', array: ['nap', 'make biscuits', 'jump on'] },
    {value: 'closet', label: 'Closet', array: ['mess up clothes', 'plan world domination', 'play with the belts'] },
    {value: 'bathroom door', label: 'bathroom door', array: ['scratch', 'break in'] },
    {value: 'litter box', label: 'Litter box', array: ['poop', 'drag poop everywhere', 'dig around'] },
    {value: 'plants', label: 'Plants', array: ['sniff', 'knock over', 'climb'] }
  ];
}

function buildGame() {
  const objects = [
    { value: 'couch', label: 'Couch' },
    { value: 'bed', label: 'Bed' },
    { value: 'counter', label: 'Counter' },
    { value: 'window', label: 'Window' },
    { value: 'water bowl', label: 'Water Bowl' },
    { value: 'food bowl', label: 'Food Bowl' },
    { value: 'bean bag', label: 'Bean Bag' },
    { value: 'closet', label: 'Closet' },
    { value: 'bathroom door', label: 'Bathroom Door' },
    { value: 'litter box', label: 'Litter Box' },
    { value: 'plants', label: 'Plants' },
  ];
  objects.forEach(function(object) {
    let objectChoice = document.createElement("input");
    objectChoice.type = "radio";
    objectChoice.name = "objectsRadioButtons";
    objectChoice.value = object.value;
    gameboard.appendChild(objectChoice);
  
    let label = document.createElement("label");
    label.innerHTML = object.label;
    gameboard.appendChild(label);
  });
}

buildGame();


function displayArray(array) {
  // Hide the radio buttons (should i do this?)
 // radioButtons.forEach(function(radioButton) {
 //   radioButton.style.display = 'none';
//  });
  
  // Create a div to display the array
  const arrayDiv = document.createElement('div');
  arrayDiv.innerHTML = array.join(', ');
  gameboard.appendChild(arrayDiv);
 }

// Add event listener to all radio buttons
const radioButtons = document.querySelectorAll('input[name="objectsRadioButtons"]');
radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('click', function() {
    console.log('Radio button clicked');
    // Get the value of the selected radio button
    const selectedObject = this.value;

    // Perform action based on selected object
    if (selectedObject === 'couch') {
   const couchArray = catObjects.find(object => object.value === 'couch').array;
 displayArray(couchArray);
    } else if (selectedObject === 'bed') {
   const bedArray = catObjects.find(object => object.value === 'bed').array;
displayArray(bedArray);
    } else if (selectedObject === 'counter') {
      const counterArray = catObjects.find(object => object.value === 'counter').array;
displayArray(counterArray);
    } else if (selectedObject === 'window'){
      const windowArray = catObjects.find(object => object.value === 'window').array;
displayArray(windowArray);
    }
    else if (selectedObject === 'water bowl'){
      const waterBowlArray = catObjects.find(object => object.value === 'water bowl').array;
displayArray(waterBowlArray);
    }
    else if (selectedObject === 'food bowl'){
      const foodBowlArray = catObjects.find(object => object.value === 'food bowl').array;
displayArray(foodBowlArray);
    }
    else if (selectedObject === 'bean bag'){
      const beanBagArray = catObjects.find(object => object.value === 'bean bag').array;
displayArray(beanBagArray);
    }
    else if (selectedObject === 'closet'){
      const closetArray = catObjects.find(object => object.value === 'closet').array;
displayArray(closetArray);
    }
    else if (selectedObject === 'bathroom door'){
      const bathroomDoorArray = catObjects.find(object => object.value === 'bathroom door').array;
displayArray(bathroomDoorArray);
    }
    else if (selectedObject === 'litter box'){
      const litterBoxArray = catObjects.find(object => object.value === 'litter box').array;
displayArray(litterBoxArray);
    }
    else if (selectedObject === 'plants'){
      const plantsArray = catObjects.find(object => object.value === 'plants').array;
displayArray(plantsArray);
    }
  })
});
     


