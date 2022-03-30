var nam = prompt("What is your name?");

if (nam.length!=0){
    if(nam == "colleen")
        document.write("Beautiful Name");
    else    
        document.write("Hello "+nam+"<br/>");
}
else{
    document.write("Feeling shy? <br/>");
}
