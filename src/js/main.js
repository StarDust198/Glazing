'use strict';

import './slider';

import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    let modalTimer;

    modal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', false);
    modal('.phone_link', '.popup', '.popup .popup_close', true);
    forms('.form');
    tabs('.glazing_block', '.glazing_content', 'active', 'a');
    tabs('.no_click', '.decoration_content > .row > div', 'after_click');
    modal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
});