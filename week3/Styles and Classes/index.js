const drinks = ['Coffee', 'Matcha', 'Chai Latte', 'Thai Tea', 'Americano'];

for ( var i = 0; i < drinks.length; i++ ) {
    var listDrinks = document.createElement('h2');
    listDrinks.textContent = drinks[i];
    document.body.append(listDrinks);
    listDrinks.style.textAlign = 'center';
    listDrinks.style.fontSize = '20px';
    listDrinks.style.fontWeight = 'lighter';
    listDrinks.style.fontFamily = 'sans-serif';
    listDrinks.style.color = 'cornflowerblue';
    listDrinks.classList.add('border');
    document.body.append(listDrinks);
}
