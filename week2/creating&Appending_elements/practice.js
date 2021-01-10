var header = document.createElement("h1");
header.textContent = "Welcome to my JS site";
header.style.fontSize = "30px";
document.body.append(header);

var paragraph = document.createElement("p");
paragraph.textContent = "All of this was created with Javascript";
document.body.append(paragraph);

var ol = document.createElement(ol);
document.body.append(ol);

var li = document.createElement(li);
li.textContent = "Hi";
ol.append(li);

var list1 = document.createElement("li")
list1.className = "list1";
list1.textContent = "I love Coffee"
document.body.append(list1);

var list2 = document.createElement("li");
list2.textContent = "I love Tea";
document.body.append(list2);

var list3 = document.createElement("li");
list3.textContent = "I love Coding";
document.body.append(list3);
