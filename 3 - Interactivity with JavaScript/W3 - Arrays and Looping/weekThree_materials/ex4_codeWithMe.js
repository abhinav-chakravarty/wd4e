var grades = [2,5,,,9,8,,8];
var sum = 0;
var count = 0;
if(grades.length>0){
    for(i=0;i<grades.length;i++){
        if(grades[i]!=undefined){
            sum+=grades[i];
            count = count+1;
        }
    }
    document.write(sum/count);
}
else{
    document.write("Empty Array");
}