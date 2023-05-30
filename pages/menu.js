export function menu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const title = document.createElement('h1');
    title.textContent = "Welcome to Gastronomia Deliziosa!";
    title.classList.add('title');
    menu.appendChild(title);

    const sub = document.createElement('h2');
    sub.textContent = 'Experience the Art of Fine Dining';
    sub.classList.add('sub');
    menu.appendChild(sub);

    const description = document.createElement('div');
    description.innerHTML = "At Gastronomia Deliziosa, we take pride in curating a menu that showcases the finest flavors from around the world. Our passionate chefs blend traditional techniques with innovative twists, resulting in culinary masterpieces that will tantalize your taste buds.";
    description.classList.add('text');
    menu.appendChild(description);

    // Create and append the appetizers section
    const appetizersTitle = document.createElement('h3');
    appetizersTitle.textContent = 'Appetizers';
    appetizersTitle.classList.add('listHead')
    menu.appendChild(appetizersTitle);

    const appetizersList = document.createElement('ul');
    appetizersList.classList.add('list');
    menu.appendChild(appetizersList);

    // Add each appetizer item to the list
    const appetizers = [
        'Bruschetta Trio: A medley of classic tomato, creamy avocado, and tangy goat cheese bruschetta.',
        'Tempura Prawns: Crispy prawns served with a zesty citrus dipping sauce.',
        'Caprese Salad: Fresh mozzarella, vine-ripened tomatoes, and basil drizzled with balsamic reduction.'
    ];

    appetizers.forEach((item) => {
        const appetizerItem = document.createElement('li');
        appetizerItem.textContent = item;
        appetizerItem.classList.add('listItem');
        appetizersList.appendChild(appetizerItem);
    });

    // Create and append the main courses section
    const mainCoursesTitle = document.createElement('h3');
    mainCoursesTitle.textContent = 'Main Courses';
    mainCoursesTitle.classList.add('listHead');
    menu.appendChild(mainCoursesTitle);

    const mainCoursesList = document.createElement('ul');
    mainCoursesList.classList.add('list');
    menu.appendChild(mainCoursesList);

    // Add each main course item to the list
    const mainCourses = [
        'Filet Mignon: Tender, juicy beef filet served with a red wine reduction and truffle-infused mashed potatoes.',
        'Pan-Seared Salmon: Atlantic salmon served on a bed of sautéed spinach with lemon beurre blanc.',
        'Wild Mushroom Risotto: Creamy Arborio rice cooked with a variety of wild mushrooms and finished with truffle oil.'
    ];

    mainCourses.forEach((item) => {
        const mainCourseItem = document.createElement('li');
        mainCourseItem.textContent = item;
        mainCourseItem.classList.add('listItem');
        mainCoursesList.appendChild(mainCourseItem);
    });

    // Create and append the desserts section
    const dessertsTitle = document.createElement('h3');
    dessertsTitle.textContent = 'Desserts';
    dessertsTitle.classList.add('listHead');
    menu.appendChild(dessertsTitle);

    const dessertsList = document.createElement('ul');
    dessertsList.classList.add('list');
    menu.appendChild(dessertsList);

    // Add each dessert item to the list
    const desserts = [
        'Chocolate Lava Cake: Decadent chocolate cake with a molten chocolate center, served with vanilla ice cream.',
        'Tiramisu: Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
        'Lemon Tart: Refreshing lemon custard in a delicate buttery crust, garnished with fresh berries.'
    ];

    desserts.forEach((item) => {
        const dessertItem = document.createElement('li');
        dessertItem.textContent = item;
        dessertItem.classList.add('listItem');
        dessertsList.appendChild(dessertItem);
    });

    return menu;
}