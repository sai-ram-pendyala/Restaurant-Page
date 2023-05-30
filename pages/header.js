export function header() {
    const header = document.createElement("div");
    header.id = 'header';
    
    const homeTab = document.createElement("button");
    header.classList.add('header');
    homeTab.id = 'homeTab';
    homeTab.textContent = "Home";
    homeTab.classList.add('tab');
    header.appendChild(homeTab);
    
    const menuTab = document.createElement("button");
    menuTab.textContent = "Menu";
    menuTab.id = 'menuTab';
    menuTab.classList.add('tab');
    header.appendChild(menuTab);
    
    const aboutTab = document.createElement("button");
    aboutTab.textContent = "About";
    aboutTab.id = 'aboutTab';
    aboutTab.classList.add('tab');
    header.appendChild(aboutTab);
    
    return header;
}