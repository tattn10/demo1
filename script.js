const obj={
    browsers:["chrome", "brave", "opera"]

}
let txt=" ";
for (const x in obj.browsers){
    txt +="<li>"+ obj.browsers[x] + "</li>"+ "<br>";
}


const num1= Math.Floor(Math.Random());


function clickk(){
    document.getElementById("demo1").innerHTML=num1; 
}


