import { global_swipe } from './global_swipe.js';
import { design } from './design.js';
import { skills_carousel } from './skills_carousel.js';
import { project_slide } from './projects.js';
import { skills_texts } from './skills_texts.js';

skills_carousel();
design(),
window.onload = [
    project_slide(),
    skills_texts(),
];
skills_texts();