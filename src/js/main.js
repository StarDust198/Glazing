'use strict';

import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import gallery from './modules/gallery';

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {};
    changeModalState(modalState);

    const deadline = '2021-12-15';

    forms(modalState);

    modals();

    tabs('.glazing_block', '.glazing_content', 'active', 'a');
    tabs('.no_click', '.decoration_content > .row > div', 'after_click');
    tabs('.balcon_icons_img', '.big_img.text-center > img', 'do_image_more', '', 'inline');

    timer('#timer', deadline);

    gallery();
});