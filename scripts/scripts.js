/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
const catChoicePip = document.getElementById("catChoicePip");
const catChoiceIvy = document.getElementById("catChoiceIvy");
const pipChoices = document.getElementById("pipChoices");
const ivyChoices = document.getElementById("ivyChoices");

catChoicePip.addEventListener("change", function() {
    if (catChoicePip.checked) {
        pipChoices.style.display = "block";
        ivyChoices.style.display = "none";
     document.getElementById("catChoice").style.display = "none";
    }
});

catChoiceIvy.addEventListener("change", function() {
    if (catChoiceIvy.checked) {
        ivyChoices.style.display = "block";
        pipChoices.style.display = "none";
     document.getElementById("catChoice").style.display = "none";
    }
});

const pipPlaytimeSelect = document.querySelector('#pipPlaytime');
pipPlaytimeSelect.addEventListener('change', pipPlaytimeSelect);

const ivyPlaytimeSelect = document.querySelector('#ivyPlaytime');
ivyPlaytimeSelect.addEventListener('change', ivyPlaytimeSelect);


const pipInputs = document.querySelectorAll('#pipChoices input');

pipInputs.forEach(input => {
  input.addEventListener('change', function() {
    if (input.checked) {
      input.style.display = 'none';
      pipChoices.style.display = "none";
    }
  });
});

const ivyInputs = document.querySelectorAll('#ivyChoices input');

ivyInputs.forEach(input => {
  input.addEventListener('change', function() {
    if (input.checked) {
      input.style.display = 'none';
      ivyChoices.style.display = "none";
    }
  });
});



// Ivy's Choices
const ivyObjectInteractions = document.getElementById('ivyChoices');
const ivyCouch = document.getElementById('ivyCouch');
const ivyBed = document.getElementById('ivyBed');
const ivyFoodBowl = document.getElementById('ivyFoodBowl');
const ivyWaterBowl = document.getElementById('ivyWaterBowl');
const ivyKitchenCounter = document.getElementById('ivyKitchenCounter');
const ivyLitterBox = document.getElementById('ivyLitterBox');
const ivyBeanBag = document.getElementById('ivyBeanBag');
const ivyPlants = document.getElementById('ivyPlants');
const ivyBathroomDoor = document.getElementById('ivyBathroomDoor');
const ivyWindow = document.getElementById('ivyWindow');
const ivyCloset = document.getElementById('ivyCloset');

// listen for changes to the radio buttons in the ivyChoices fieldset
ivyChoices.addEventListener('change', function(event) {
  // get the selected value
  const selectedValue = event.target.value;

  // hide all the other fieldsets
  ivyCouch.style.display = 'none';
  ivyBed.style.display = 'none';
  ivyFoodBowl.style.display = 'none';
  ivyWaterBowl.style.display = 'none';
  ivyKitchenCounter.style.display = 'none';
  ivyLitterBox.style.display = 'none';
  ivyBeanBag.style.display = 'none';
  ivyPlants.style.display = 'none';
  ivyBathroomDoor.style.display = 'none';
  ivyWindow.style.display = 'none';
  ivyCloset.style.display = 'none';
  

  // show the appropriate fieldset based on the selected value
  if (selectedValue === 'couch') {
    ivyCouch.style.display = 'block';
  } else if (selectedValue === 'bed') {
    ivyBed.style.display = 'block';
  } else if (selectedValue === 'food-bowl') {
    ivyFoodBowl.style.display = 'block';
  } else if (selectedValue === 'water-bowl') {
    ivyWaterBowl.style.display = 'block';
  } else if (selectedValue === 'kitchen-counter') {
    ivyKitchenCounter.style.display = 'block';
  } else if (selectedValue === 'litter-box') {
    ivyLitterBox.style.display = 'block';
  } else if (selectedValue === 'bean-bag') {
    ivyBeanBag.style.display = 'block';
  } else if (selectedValue === 'plants') {
    ivyPlants.style.display = 'block';
  } else if (selectedValue === 'bathroom-door') {
    ivyBathroomDoor.style.display = 'block';
  } else if (selectedValue === 'window') {
    ivyWindow.style.display = 'block';
  } else if (selectedValue === 'closet') {
    ivyCloset.style.display = 'block';
  }
});



// get references to the relevant elements
const pipObjectInteractions = document.getElementById('pipChoices');
const pipCouch = document.getElementById('pipCouch');
const pipBed = document.getElementById('pipBed');
const pipFoodBowl = document.getElementById('pipFoodBowl');
const pipWaterBowl = document.getElementById('pipWaterBowl');
const pipKitchenCounter = document.getElementById('pipKitchenCounter');
const pipLitterBox = document.getElementById('pipLitterBox');
const pipBeanBag = document.getElementById('pipBeanBag');
const pipPlants = document.getElementById('pipPlants');
const pipBathroomDoor = document.getElementById('pipBathroomDoor');
const pipWindow = document.getElementById('pipWindow');
const pipCloset = document.getElementById('pipCloset');

// listen for changes to the radio buttons in the pipChoices fieldset
pipChoices.addEventListener('change', function(event) {
  // get the selected value
  const selectedValue = event.target.value;

  // hide all the other fieldsets
  pipCouch.style.display = 'none';
  pipBed.style.display = 'none';
  pipFoodBowl.style.display = 'none';
  pipWaterBowl.style.display = 'none';
  pipKitchenCounter.style.display = 'none';
  pipLitterBox.style.display = 'none';
  pipBeanBag.style.display = 'none';
  pipPlants.style.display = 'none';
  pipBathroomDoor.style.display = 'none';
  pipWindow.style.display = 'none';
  pipCloset.style.display = 'none';
  

  // show the appropriate fieldset based on the selected value
  if (selectedValue === 'couch') {
    pipCouch.style.display = 'block';
  } else if (selectedValue === 'bed') {
    pipBed.style.display = 'block';
  } else if (selectedValue === 'food-bowl') {
    pipFoodBowl.style.display = 'block';
  } else if (selectedValue === 'water-bowl') {
    pipWaterBowl.style.display = 'block';
  } else if (selectedValue === 'kitchen-counter') {
    pipKitchenCounter.style.display = 'block';
  } else if (selectedValue === 'litter-box') {
    pipLitterBox.style.display = 'block';
  } else if (selectedValue === 'bean-bag') {
    pipBeanBag.style.display = 'block';
  } else if (selectedValue === 'plants') {
    pipPlants.style.display = 'block';
  } else if (selectedValue === 'bathroom-door') {
    pipBathroomDoor.style.display = 'block';
  } else if (selectedValue === 'window') {
    pipWindow.style.display = 'block';
  } else if (selectedValue === 'closet') {
    pipCloset.style.display = 'block';
  }
});


const pipBathroomBreakIn = document.getElementById('pipBathroomBreakIn');
const pipBathroomInfiltrate = document.getElementById('pipBathroomInfiltrate');

//if cats break into bathroom
pipBathroomDoor.addEventListener('change', function(event) {
  // get the selected value
  pipBathroomDoor.style.display = 'none';
  const selectedValue = event.target.value;
  if (selectedValue === pipBathroomBreakIn) {
    pipBathroomInfiltrate.style.display = 'block';
  }
});

const ivyBathroomInfiltrate = document.getElementById('ivyBathroomInfiltrate');
const ivyBathroomBreakIn = document.getElementById('ivyBathroomBreakIn');

ivyBathroomDoor.addEventListener('change', function(event) {
  // get the selected value
  ivyBathroomDoor.style.display = 'none';
  const selectedValue = event.target.value;
  if (selectedValue === ivyBathroomBreakIn) {
    ivyBathroomInfiltrate.style.display = 'block';
  }
});