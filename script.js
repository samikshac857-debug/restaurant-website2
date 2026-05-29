window.addEventListener("scroll", function(){

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.background = "#08101d";

  }
  else{

    header.style.background = "#0f172b";

  }

});

// Button Click Animation

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.9)";

    setTimeout(() => {

      button.style.transform = "scale(1)";

    },150);

  });

});