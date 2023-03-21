
function scuberGreetingForFeet(ride){
  // Write your code here!
  let pay;

  if (ride <= 400) {
    pay = 'This one is on me!';
  } else if (ride <= 2000) {
    pay = 'That will be twenty bucks.';
  } else if (ride <= 2500) {
    pay = 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    pay = 'No can do.';
  }
  return pay;
}


const city = "NYC"
function ternaryCheckCity(city) {
  // Write your code here!

  return city === "NYC" ? "Ok, sounds good." : "No go.";
} 


function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip) {
  case "generous":
    return "Thank you so much."
  break;
  case "not as generous":
    return "Thank you."
  break;
  default:
    return "Bye."
break;
  }
}
