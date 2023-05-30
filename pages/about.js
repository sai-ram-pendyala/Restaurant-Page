export function about() {
    const about = document.createElement("div");
    about.id = "about";

    const title = document.createElement("h1");
    title.textContent = "Our Story and Philosophy";
    title.classList.add("title");
    about.appendChild(title);

    const sub = document.createElement("h2");
    sub.textContent =
        "Experience Passion, Sustainability, and Unparalleled Hospitality";
    sub.classList.add("sub");
    about.appendChild(sub);

    const description = document.createElement("div");
    description.innerHTML =
        "Gastronomia Deliziosa was born out of a passion for culinary excellence and a desire to create a haven for food enthusiasts. Our founders, Maria and Antonio Rossi, envisioned a dining destination that would redefine the boundaries of taste, aesthetics, and hospitality.";
    description.classList.add("text");
    about.appendChild(description);

    const sustainabilityTitle = document.createElement("h3");
    sustainabilityTitle.textContent = "Sustainability";
    sustainabilityTitle.classList.add('listHead');
    about.appendChild(sustainabilityTitle);

    const sustainabilityList = document.createElement("ul");
    sustainabilityList.classList.add('list');
    about.appendChild(sustainabilityList);

    const sustainabilityItems = [
        "We source locally to support farmers and artisans in our community.",
        "We prioritize fresh, seasonal ingredients to deliver the highest quality dishes.",
    ];

    sustainabilityItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.classList.add('listItem');
        sustainabilityList.appendChild(listItem);
    });

    const hospitalityTitle = document.createElement("h3");
    hospitalityTitle.classList.add('listHead');
    hospitalityTitle.textContent = "Unparalleled Hospitality";
    about.appendChild(hospitalityTitle);

    const hospitalityList = document.createElement("ul");
    hospitalityList.classList.add('list');
    about.appendChild(hospitalityList);

    const hospitalityItems = [
        "Our team is dedicated to providing personalized service and ensuring your comfort.",
        "We strive to create an unforgettable dining experience for each and every guest.",
    ];

    hospitalityItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.classList.add('listItem');
        hospitalityList.appendChild(listItem);
    });

    const excellenceTitle = document.createElement("h3");
    excellenceTitle.classList.add('listHead');
    excellenceTitle.textContent = "Culinary Excellence";
    about.appendChild(excellenceTitle);

    const excellenceList = document.createElement("ul");
    excellenceList.classList.add('list');
    about.appendChild(excellenceList);

    const excellenceItems = [
        "Our chefs combine traditional techniques with innovative approaches.",
        "Every dish is meticulously prepared to bring out the best flavors and artistic presentations.",
    ];

    excellenceItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.classList.add('listItem');
        excellenceList.appendChild(listItem);
    });

    return about;
}
