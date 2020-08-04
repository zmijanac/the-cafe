 function showEat() {
    
  var i = document.getElementsByClassName("eat").length;
  var x = document.getElementsByClassName("eat");
  
  for (i = 0; i < x.length; i++) {
  x[i].style.display = "block";
  }
  
  var j = document.getElementsByClassName("drink").length;
  var y = document.getElementsByClassName("drink");
  for (j = 0; j < x.length; j++) {
  y[j].style.display = "none";
  }
  
  document.getElementById("eatbtn").style.backgroundColor = "#616161";
  document.getElementById("eatbtn").style.color = "white";
  
  document.getElementById("drinkbtn").style.backgroundColor = "#f7f5f2";
  document.getElementById("drinkbtn").style.color = "black";
  }
  
  function showDrink() {
    
  var i = document.getElementsByClassName("eat").length;
  var x = document.getElementsByClassName("eat");
  
  for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
  }
  
  var j = document.getElementsByClassName("drink").length;
  var y = document.getElementsByClassName("drink");
  
  for (j = 0; j < x.length; j++) {
  y[j].style.display = "block";
  }
  
  document.getElementById("drinkbtn").style.backgroundColor = "#616161";
  document.getElementById("drinkbtn").style.color = "white";

  document.getElementById("eatbtn").style.backgroundColor = "#f7f5f2";
  document.getElementById("eatbtn").style.color = "black";
}
  