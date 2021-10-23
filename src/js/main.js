'use strict';

import './slider';

import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {};

    changeModalState(modalState);

    modal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', false);
    modal('.phone_link', '.popup', '.popup .popup_close', true);
    forms(modalState);
    tabs('.glazing_block', '.glazing_content', 'active', 'a');
    tabs('.no_click', '.decoration_content > .row > div', 'after_click');

    modal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    tabs('.balcon_icons_img', '.big_img.text-center > img', 'do_image_more', '', 'inline');
    modal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    modal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    
});