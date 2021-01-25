var header = document.createElement("h1");
header.textContent = "Basic Calculator";
header.style.color = "#009092";
header.style.fontSize = "65px"
document.body.appendChild(header);

// ADD

var div1 = document.createElement("div");
div1.setAttribute("id", "sec1");
document.body.appendChild(div1);

var box1 = document.createElement("input");
box1.setAttribute("type", "text");
box1.setAttribute("id", "submit1");
box1.style.background = "#9BFCC1";
box1.style.border = "5px double black";
box1.style.padding = "5px";
box1.style.fontSize = "16px";
box1.style.marginBottom = "20px";
document.getElementById("sec1").appendChild(box1);

var add = document.createElement("span");
add.textContent = "+";
add.style.fontSize = "25px";
add.style.padding = "10px";
add.style.color = "black";
document.getElementById("sec1").appendChild(add);

var box2 = document.createElement("input");
box2.setAttribute("type", "text");
box2.setAttribute("id", "submit2");
box2.style.background = "#9BFCC1";
box2.style.border = "5px double black";
box2.style.padding = "5px";
box2.style.fontSize = "16px";
box2.style.marginBottom = "20px";
document.getElementById("sec1").appendChild(box2);

var equal = document.createElement("button");
equal.textContent = "=";
equal.style.fontSize = "20px";
equal.style.border = "5px double black";
equal.style.background = "#9BFCC1";
equal.style.marginLeft = "15px";
equal.style.marginRight = "20px";
document.getElementById("sec1").appendChild(equal);

equal.addEventListener("click", function() {
var num1 = document.getElementById("submit1").value;
var num2 = document.getElementById("submit2").value;
var eql = Number(num1) + Number(num2);
var response = document.createElement("span");
response.textContent = eql;
response.style.fontSize = "20px";
response.style.border = "4px dotted black";
response.style.padding = "5px";
response.style.marginLeft = "10px";
response.style.marginRight = "15px";
response.style.background = "#9BFCC1";
document.getElementById("sec1").appendChild(response);
});

// SUBTRACT

var div2 = document.createElement("div");
div2.setAttribute("id", "sec2");
document.body.appendChild(div2);

var box3 = document.createElement("input");
box3.setAttribute("type", "text");
box3.setAttribute("id", "submit3");
box3.style.background = "#D4CAEE";
box3.style.border = "5px double black";
box3.style.padding = "5px";
box3.style.fontSize = "16px";
box3.style.marginBottom = "20px";
document.getElementById("sec2").appendChild(box3);

var sub = document.createElement("span");
sub.textContent = "-";
sub.style.fontSize = "28px";
sub.style.padding = "12px";
sub.style.color = "black";
document.getElementById("sec2").appendChild(sub);

var box4 = document.createElement("input");
box4.setAttribute("type", "text");
box4.setAttribute("id", "submit4");
box4.style.background = "#D4CAEE";
box4.style.border = "5px double black";
box4.style.padding = "5px";
box4.style.fontSize = "16px";
box4.style.marginBottom = "20px";
document.getElementById("sec2").appendChild(box4);

var equals2 = document.createElement("button");
equals2.textContent = "=";
equals2.style.fontSize = "20px";
equals2.style.border = "5px double black";
equals2.style.background = "#D4CAEE";
equals2.style.marginLeft = "15px";
equals2.style.marginRight = "20px";
document.getElementById("sec2").appendChild(equals2);

equals2.addEventListener("click", function() {
var num3 = document.getElementById("submit3").value;
var num4 = document.getElementById("submit4").value;
var eql2 = Number(num3) - Number(num4);
var response2 = document.createElement("span");
response2.textContent = eql2;
response2.style.fontSize = "20px";
response2.style.border = "4px dotted black";
response2.style.background = "#D4CAEE";
response2.style.padding = "5px";
response2.style.marginLeft = "10px";
response2.style.marginRight = "15px";
document.getElementById("sec2").appendChild(response2);
});

// MULTIPLY

var div3 = document.createElement("div");
div3.setAttribute("id", "sec3");
document.body.appendChild(div3);

var box5 = document.createElement("input");
box5.setAttribute("type", "text");
box5.setAttribute("id", "submit5");
box5.style.background = "#FDBAD9";
box5.style.border = "5px double black";
box5.style.padding = "5px";
box5.style.fontSize = "16px";
box5.style.marginBottom = "20px";
document.getElementById("sec3").appendChild(box5);

var multi = document.createElement("span");
multi.textContent = "x";
multi.style.fontSize = "25px";
multi.style.padding = "10px";
multi.style.color = "black";
document.getElementById("sec3").appendChild(multi);

var box6 = document.createElement("input");
box6.setAttribute("type", "text");
box6.setAttribute("id", "submit6");
box6.style.background = "pink";
box6.style.border = "5px double black";
box6.style.padding = "5px";
box6.style.fontSize = "16px";
box6.style.marginBottom = "20px";
document.getElementById("sec3").appendChild(box6);

var equals3 = document.createElement("button");
equals3.textContent = "=";
equals3.style.fontSize = "20px";
equals3.style.border = "5px double black";
equals3.style.background = "pink"
equals3.style.marginLeft = "15px";
equals3.style.marginRight = "20px";
document.getElementById("sec3").appendChild(equals3);

equals3.addEventListener("click", function() {
var num5 = document.getElementById("submit5").value;
var num6 = document.getElementById("submit6").value;
var eql3 = Number(num5) * Number(num6);
var response3 = document.createElement("span");
response3.textContent = eql3;
response3.style.fontSize = "20px";
response3.style.border = "4px dotted black";
response3.style.padding = "5px";
response3.style.marginLeft = "10px";
response3.style.marginRight = "15px";
response3.style.background = "pink";
document.getElementById("sec3").appendChild(response3);
});
