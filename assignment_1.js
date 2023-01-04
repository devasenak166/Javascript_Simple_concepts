// string operation
var Institute="Skill safari"
console.log(Institute.length)
console.log(Institute.toUpperCase())
console.log(Institute.indexOf("a"))



// creating conversation in single console.log by using object.

let user = {
Iron_Man :   "Call it, Captain!",
Captain_America : "Alright, listen up. Until we can close that portal, our priority's containment. Barton, I want you on that roof, eyes on everything. Call out patterns and strays. Stark, you got the perimeter. Anything gets more than three blocks out, you turn it back or you turn it to ash.",
Hawkeye :  "Want to give me a lift?",
Iron_Man : "Right. Better clench up, Legolas.",
Captain_America : "Thor, you gotta try and bottleneck that portal. Slow 'em down. You got the lightning. Light the bastards up.",
Captain_America : "You and me, we stay here on the ground, keep the fighting here. And Hulk?",
Captain_America : "Smash!",
}
  console.log(user)
 
 
 
  //Calculating BMI
    var weight=35
    var height=1.53
    var BMI=""
   var ans=weight/height
    if(ans<25 && ans>=18){
        BMI="The person is Normal."
    }
    else if (ans>25 && ans<=30){
        BMI="The person is Over weight"
    }
    else{
        BMI="The person is obesity"
    }
    console.log(BMI)