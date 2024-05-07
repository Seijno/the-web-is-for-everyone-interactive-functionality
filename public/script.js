// variables
const appear = document.querySelector(".quantityChoice");
appear.style.display = 'block';

const reveal = document.getElementById("popupField");

// evenlisteners
reveal.addEventListener('click', revealPopup)


// functies
function checked(){
    document.getElementById('selected').innerHTML = getCheckboxCount();
  }
  
function getCheckboxCount() {
    return document.querySelectorAll('input[type=checkbox]:checked').length;
}
  
document.querySelectorAll("input").forEach(input=>{
    input.onclick = () => checked();
});

function revealPopup(){
    reveal;
    element.classList.toggle("popupFieldReveal");
}