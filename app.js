'use strict'; 

// var iName = prompt("Please enter your name: ");


// var Gender = prompt("Please enter your gender: ");

// var Age = prompt("Please enter your age: ");
// if (Age<=0){
//     alert("The age you put is less or equle to 0");
// }

// var  welcomingMa= confirm("Do you want to viw the wilcoming massage? ");









// switch(welcomingMa){
    

// case false:
 
//     break;
// case true:
//     switch(Gender){
//         case "male":
//             alert(`welcom MR ${iName}`);
//             break;
//         case "female":
//             alert(`welcom Ms ${iName}`);
//             break;
//         default: 
//             alert("welcom to the website.");
//             break;


//     }




//     // if (Gender= "male"){
//     //     alert("Welcom Mr");
        
//     // }
//     // else {
//     //     alert("welcom Ms.");
//     // }
    
//     break;

// }


function yesNo(string){
    switch (string){
        case "yes":

            return pushArr("yes");
            break;

        case "no":
            
            return pushArr("No");
            break;

        default:

            return pushArr("invalid");
            break;
    }
}
let anwArr=[];

function pushArr(str){
    
    anwArr.push(str);
    return anwArr;

}

let Q1= yesNo(prompt("Did you clean your room? "));



let Q2= yesNo(prompt("Did you take the dog for a walk?"));


let Q3= yesNo(prompt("Did you solve you H.W?"));


console.log(anwArr);
for (let i=0; i<anwArr.length ; i++){
    console.log(anwArr[i]);
}
