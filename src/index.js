import './style.css';
import { header } from "../pages/header";
import { home } from '../pages/home';
import { menu } from '../pages/menu';
import { about } from '../pages/about';
import { remove } from '../functions/remove';

const content = document.querySelector('#content');
content.appendChild(header());
content.appendChild(home());

const homeTab = document.querySelector('#homeTab');
homeTab.addEventListener('click', () => {
    remove();
    content.appendChild(home());
});

const menuTab = document.querySelector('#menuTab');
menuTab.addEventListener('click', () => {
    remove();
    content.appendChild(menu());
});

const aboutTab = document.querySelector('#aboutTab');
aboutTab.addEventListener('click', () => {
    remove();
    content.appendChild(about());
});