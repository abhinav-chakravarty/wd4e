// Example 1
var nam = prompt("What is your name?");

if (nam.length!=0){
    document.write("Hello "+nam+"<br/>");
}

// Example 2
var grades = [2,5,6,8];
var sum = 0;
if(grades.length>0){
    for(i=0;i<grades.length;i++){
        sum+=grades[i];
    }
    document.write(sum/grades.length);
}