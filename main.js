var para1=[];
function join_para1(){
    for(i=1;i<=6;i++){
    para1.push(document.getElementById("para1_input"+i).value);
 }
    document.getElementById("para1_div").innerHTML=para1.join(" ");
}

var para2=[];
function join_para2(){
    for(i=1;i<=6;i++){
    para2.push(document.getElementById("para2_input"+i).value);
 }
    document.getElementById("para2_div").innerHTML=para2.join(". ");
}