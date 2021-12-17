function calc(){
let amount=document.getElementById("textfield").value;
let satisfaction=document.getElementById("selectfield").value;
let people=document.getElementById("txtpeople").value;

if(amount===""&&satisfaction===""){
    alert("Please enter values");
    // document.getElementById("p").style.visibility="hidden";
    // document.getElementById("tipvalue").style.visibility="hidden";
    window.location.reload();
}

if(people<=1){
    document.getElementById("each").style.visibility="hidden";
}else{
    document.getElementById("each").style.visibility="visible";
}


let result=document.getElementById("tipvalue");
let tip=(amount*satisfaction);
if(people>1){
    tip=tip/people;
   tip= tip.toFixed(1)
}
result.innerHTML=" "+tip;

}

