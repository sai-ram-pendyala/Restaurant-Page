export function home() {
    const home = document.createElement('div');
    home.id = 'home';

    const title = document.createElement('h1');
    title.textContent = "Welcome to Gastronomia Deliziosa!";
    title.classList.add('title');
    home.appendChild(title);
    
    const sub = document.createElement('h2');
    sub.textContent = 'Experience the Art of Fine Dining';
    sub.classList.add('sub');
    home.appendChild(sub);
    
    const description = document.createElement('div');
    description.innerHTML = "At Gastronomia Deliziosa, we believe in the power of exceptional dining experiences. From the moment you step through our doors, you'll be greeted with an inviting ambiance, warm hospitality, and a culinary journey like no other. Our team of talented chefs and friendly staff are dedicated to creating unforgettable memories for our guests.<br><br>Indulge your senses in our thoughtfully crafted menu, featuring a fusion of international flavors and locally sourced ingredients. Whether you're joining us for a romantic dinner, a business meeting, or a casual gathering with friends and family, we promise to deliver an extraordinary dining experience that will leave you craving for more."
    description.classList.add('text');
    home.appendChild(description);
    
    const listHeader = document.createElement('h3');
    listHeader.textContent = "Explore Gastronomia Deliziosa:";
    listHeader.classList.add('listHead');
    home.appendChild(listHeader);
    
    const list = document.createElement('ul');
    list.classList.add('list');
    
    const l1 = document.createElement('li');
    l1.textContent = "Immerse yourself in an inviting ambiance that combines elegance and comfort.";
    l1.classList.add('listItem');
    list.appendChild(l1);
    
    const l2 = document.createElement('li');
    l2.textContent = "Experience warm hospitality from our knowledgeable and attentive staff.";
    l2.classList.add('listItem');
    list.appendChild(l2);
    
    const l3 = document.createElement('li');
    l3.textContent = "Enjoy a culinary journey with an innovative twist on traditional flavors.";
    l3.classList.add('listItem');
    list.appendChild(l3);
    
    const l4 = document.createElement('li');
    l4.textContent = "Discover the perfect harmony between artistry and taste.";
    l4.classList.add('listItem');
    list.appendChild(l4);
    
    home.appendChild(list);

    return home;
}