function clickMeEvent(obj) {
   if (obj.innerHTML == "Click here to learn more about me!") {obj.innerHTML = "I grew up on the Canadian Prairies";
   return;
  }
  if (obj.innerHTML == "I grew up on the Canadian Prairies") {obj.innerHTML = "I was diagnoised with autism in 2019";
  return;
 }
 if (obj.innerHTML == "I was diagnoised with autism in 2019") {obj.innerHTML = "I worked in the Houses of Parliament";
 return;
}
if (obj.innerHTML == "I worked in the Houses of Parliament") {obj.innerHTML = "I went viral for riding buses in February!";
return;
}
if (obj.innerHTML == "I went viral for riding buses in February!") {obj.innerHTML = "I really want to create tech that makes the world better";
return;
}
if (obj.innerHTML == "I really want to create tech that makes the world better") {obj.innerHTML = "Alight now and explore more!";
return;
}
if (obj.innerHTML == "Alight now and explore more!") {obj.innerHTML = "Click here to learn more about me!";
return;
}
}
