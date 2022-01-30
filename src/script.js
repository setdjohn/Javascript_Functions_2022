var number = 5;

function eleMaker(name,val){
    var ele = document.createElement("div");
    ele.innerHTML=name;
    ele.addEventListener("click", function (){
        increase(val);
    })
    document.body.querySelector(".main").appendChild(ele);
}

function increase (val){
    number=number+val;
    document.body.querySelector(".number").innerHTML=number;
}



document.body.querySelector(".clicker" ).addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Shock!", 2);
    eleMaker("Pow!", 3);
    eleMaker("Language!!", 5);
});

document.body.querySelector(".clicker2" ).addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("WHAM!", 8);
    eleMaker("DONG!", 10);
    eleMaker("Gotcha!", 6);
});

document.body.querySelector(".clicker3" ).addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Sun's getting real low", 8);
    eleMaker("We're still friends right?", 10);
    eleMaker("Suprise!", 6);
});

document.body.querySelector(".clicker4" ).addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("You took everything from me!", 8);
    eleMaker("I'm not pulling my punches", 10);
    eleMaker("HAAAAA!", 6);
});