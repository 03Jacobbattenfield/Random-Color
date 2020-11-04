var button=document.querySelector('button'); //button gets the button id
var body=document.getElementById("shell"); //body gets the body id
var colors=['red','blue','green','yellow','pink','tomato','aqua','white'];//array of colors 
    function change(){//function called upon by an onclick in the html
    var colorIndex= parseInt(Math.random()*colors.length);//grabs the array strings at random
    body.style.backgroundColor=colors[colorIndex];//changes the background color to something random
    
}
    