let result = document.getElementById("result");
let question = document.getElementById("question");
let lnum = 0;
let z1, z2, z3;

function clearInput() {
  question.value = "";
}
function start() {
  let input = question.value;

  if (lnum === 0) {
    z1 = input;
    clearInput();
    lnum++;
    result.innerHTML = "What prices are you looking for? 1. -£20 or 2. £20-£34 or 3. £35+ - please type either 1 or 2 or 3 (Sweatshirts are not available for under £20)";
    return;
  }

  if (lnum === 1) {
    z2 = input;
    clearInput();
    lnum++;
    result.innerHTML = "What are you looking for? 1. Sweatshirts or 2. T-shirts or 3. Hats/Caps - please type either 1 or 2 or 3";
    return;
  }

  if (lnum === 2) {
    z3 = input;
    clearInput();
    result.innerHTML = "Thanks! Loading...";
    lnum++;
    get()
  }
}
function get(){
  if (z1 === "1" && z2 === "1" && z2 === "1"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "1" && z2 === "1" && z3 === "2"){
    result.innerHTML = "It looks like the Kids Zero T-shirt or the Zero - Pink Plain Front Kids T-Shirt are the best options for you";
  }
  if (z1 === "1" && z2 === "1" && z3 === "3"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "1" && z2 === "2" && z2 === "1"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "1" && z2 === "2" && z3 === "2"){
    result.innerHTML = "It looks like the Kids Zero T-shirt or the Youth midweight tee are the best options for you";
  }
  if (z1 === "1" && z2 === "2" && z3 === "3"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "1" && z2 === "3" && z2 === "1"){
    result.innerHTML = "it looks like the Embroidered Zero Logo Youth Hoodie or the Youth Hoodie - From Zero to Hero are the best options for you";
  }
  if (z1 === "1" && z2 === "3" && z3 === "2"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "1" && z2 === "3" && z3 === "3"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "2" && z2 === "1" && z2 === "1"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "2" && z2 === "1" && z3 === "2"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "2" && z2 === "1" && z3 === "3"){
    result.innerHTML = "It looks like the Dad Hat with Leather Patch (Rectangle) is the best option for you";
  }
  if (z1 === "2" && z2 === "2" && z2 === "1"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "2" && z2 === "2" && z3 === "2"){
    result.innerHTML = "It looks like the Unisex Garment-Dyed T-shirt or the Zero T-Shirt are the best options for you";
  }
  if (z1 === "2" && z2 === "2" && z3 === "3"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "2" && z2 === "3" && z2 === "1"){
    result.innerHTML = "It looks like the Zero - Unisex Hoodie or the Zero- Hooded Sweatshirt are the best options for you";
  }
  if (z1 === "2" && z2 === "3" && z3 === "2"){
    result.innerHTML = "No options avalible";
  }
  if (z1 === "2" && z2 === "3" && z3 === "3"){
    result.innerHTML = "It looks ike the Zero- Dad Cap is the best option for you";
  }
}