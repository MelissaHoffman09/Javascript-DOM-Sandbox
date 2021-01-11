//Project 1 Basic Wesite 

//NavBar
var navmain = document.createElement('nav');
document.body.append(navmain);

var nav1 = document.createElement('a');
nav1.textContent = 'Home';
navmain.appendChild(nav1);

var nav2 = document.createElement('a');
nav2.textContent = 'About';
navmain.appendChild(nav2);

var nav3 = document.createElement('a');
nav3.textContent = 'Contact';
navmain.appendChild(nav3);

// h1
var header = document.createElement('h1');
document.body.append(header);
header.textContent = 'Project 1';

// p
var para = document.createElement('p');
para.textContent = 'The universe is big and vast. It is beautiful. It is serene to look up at the stars and gaze at the beauty.';
document.body.append(para);

// list
var listNew = document.createElement('ol');
document.body.append(listNew);

var list1 = document.createElement('li');
list1.textContent = 'Stars';
listNew.appendChild(list1);

var list2 = document.createElement('li');
list2.textContent = 'Planets';
listNew.appendChild(list2);

var list3 = document.createElement('li');
list3.textContent = 'Moon';
listNew.appendChild(list3);

//footer
var foot = document.createElement('footer');
foot.textContent = 'Follow us to the Moon!'
document.body.append(foot);
