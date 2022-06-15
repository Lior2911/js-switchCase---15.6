// function getNum(){
//   let inputNum = document.getElementById("inputNumber")
//   switch(+inputNum.value){
//     case 3 :
//       console.log("hello");
//       break;
//     case 5 :
//       console.log("goodBye");
//       break;
//     case 7 :
//       console.log("thank you")
//       break;
//       default:
//         console.log("no messege");
//         break;
//   }
// }

// function getNameToWindow(){
//   let inputName = document.getElementById("inputName");
//   let h1Line = document.createElement("h1");
//   document.body.append(h1Line)
  
//   switch(inputName.value){
//     case "jacob" :
//     h1Line.innerText="jacob";
//      break;
//     case "nathan" :
//       h1Line.innerText="NATHAN"
//       break;
//       case "DALYA":
//         h1Line.innerText = "dalya";
//         break;
//       default:
//         h1Line.innerText = "no massage"
//         break;

//   }
// }


// function getCalculate(){
//   let h1Line = document.createElement("h1");
//   let num1 = document.getElementById("num1")
//   let num2 = document.getElementById("num2")
//   let operatorUser = document.getElementById("operator")
//   switch(operatorUser.value){
//     case "/" :
//       h1Line.innerText = num1.value / num2.value
//       break;
//     case "-":
//       h1Line.innerText = num1.value - num2.value
//       break;
//       case "+" :
//         h1Line.innerText = num1.value + num2.value

//         break;
//       case "*":
//         h1Line.innerText = num1.value * num2.value
//         break;
//         default:
//           h1Line.innerText = "null"
      
//   }
  
// }

function positionElement(){
  switch(corner.value){
    case "top-left" :
      circleElement.style = "border-radius:50%;height:100px;width:100px;top: 0px;background :"+colorInput.value

    break;
    case "top-right" : 
    circleElement.style = "float:right;border-radius:50%;height:100px;width:100px;top: 0px;background :"+colorInput.value

    break;
    case "bottom-left":
      circleElement.style = "float:right;border-radius:50%;height:100px;width:100px;top: 0px;background :"+colorInput.value


    break;
    case "bottom-right":

    break;


  }
}