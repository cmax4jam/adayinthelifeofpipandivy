const cat = Array.from(document.getElementsByName('catChoice'));
cat[0].addEventListener('change',getCatChoice );
cat[1].addEventListener('change', getCatChoice );

function getCatChoice(){
  let choice = '';
  cat.forEach( cat => {
    if (cat.checked) {
      choice = cat.value;
    }
  });
  //console.log(choice);
  localStorage.setItem("catChoice", choice);
  console.log(localStorage.catChoice);
}