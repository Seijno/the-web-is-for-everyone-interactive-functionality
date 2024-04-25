function checked(){
    document.getElementById('selected').innerHTML = getCheckboxCount();
  }
  
  function getCheckboxCount() {
    return document.querySelectorAll('input[type=checkbox]:checked').length;
  }
  
  document.querySelectorAll("input").forEach(i=>{
   i.onclick = () => checked();
  });