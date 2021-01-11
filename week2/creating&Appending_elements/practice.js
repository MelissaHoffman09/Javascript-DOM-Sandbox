//header
var header = document.createElement("h1");
header.textContent = "Welcome to my JS site";
header.style.fontSize = "30px";
document.body.append(header);

//paragraph
var paragraph = document.createElement("p");
paragraph.textContent = "All of this was created with Javascript";
document.body.append(paragraph);

// list
var ol = document.createElement(ol);
document.body.append(ol);

var list1 = document.createElement("li")
list1.textContent = "I love Coffee";
ol.appendChild(list1);

var list2 = document.createElement("li");
list2.textContent = "I love Tea";
ol.appendChild(list2);

var list3 = document.createElement("li");
list3.textContent = "I love Coding";
ol.appendChild(list3);
