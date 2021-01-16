for ( var i = 0; i < 10; i++ ) {
    var header = document.createElement("h1");
    header.textContent = 'Hello World';
    document.body.append(header);
    header.style.textAlign = 'center';
    header.style.color = 'red';
}

const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

for ( var i = 0; i < names.length; i++ ) {
    var listName = document.createElement('h3');
    listName.textContent = names[i];
    document.body.append(listName);
    listName.style.textAlign = 'center';
    listName.style.color = 'blue'
}
