var fruits = ["Bananas","Orange","Apple","Mango"];

function loadFruit(){
    document.getElementById('fruits').innerHTML=fruits;
}

function myFunction(){
    var fruit = prompt("Enter Your Favorite Fruit");
    fruits[fruits.length]=fruit;
    document.getElementById('fruits').innerHTML=fruits;
}