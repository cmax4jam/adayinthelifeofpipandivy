const gameboard = document.getElementById('gameboard');

function buildGame() {
  objects = ['couch', 'bed', 'counter', 'window', 'water bowl', 'food bowl', 'bean bag', 'closet', 'bathroom door', 'litter box', 'plants'];
  objects.forEach(item => {
    let d = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = item;
    d.setAttribute('class', item);
    d.appendChild(h3);
    gameboard.appendChild(d);

    // add click event listener to each div
    d.addEventListener('click', function() {
      console.log(`Clicked on ${item}!`);
      // do something when the div is clicked
    });
  });
}

buildGame();