function check(){
    var email = document.getElementById('email_addr');
    var email2 = document.getElementById('email_repeat');
    if(email.value != email2.value){
        alert("The two emails must match!");
        return false;
    }
}