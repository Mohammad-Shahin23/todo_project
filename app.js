'use strict'; 

var iName = prompt("Please enter your name: ");


var Gender = prompt("Please enter your gender: ");

var Age = prompt("Please enter your age: ");
if (Age<=0){
    alert("The age you put is less or equle to 0");
}

var  welcomingMa= confirm("Do you want to viw the wilcoming massage? ");









switch(welcomingMa){
    

case false:
 
    break;
case true:
    switch(Gender){
        case "male":
            alert(`welcom MR ${iName}`);
            break;
        case "female":
            alert(`welcom Ms ${iName}`);
            break;
        default: 
            alert("welcom to the website.");
            break;


    }




    // if (Gender= "male"){
    //     alert("Welcom Mr");
        
    // }
    // else {
    //     alert("welcom Ms.");
    // }
    
    break;

}
