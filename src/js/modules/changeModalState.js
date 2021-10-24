const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox'),
          btn = document.querySelector('.popup_calc_button'),
          btn2 = document.querySelector('.popup_calc_profile_button');

    state.form = 0;
    state.type = 'tree';

    const checkFilledFields = () => {
        if (!state.height || !state.width) {
            btn.disabled = true;
            btn.title = 'Введите числа для продолжения';
        } else {
            btn.disabled = false;
            btn.title = '';
        }
        if (!state.profile) {
            btn2.disabled = true;
            btn2.title = 'Выберите тип остекления';
        } else {
            btn2.disabled = false;
            btn2.title = '';
        }
    };
    
    const bindActionToElems = (eventName, elem, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(eventName, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                            elem.forEach((option, j) => {
                                j !== i ? option.checked = false : option.checked = true;
                            });
                            checkFilledFields();
                        } else {
                            item.value = item.value.replace(/\D/g, '');
                            state[prop] = item.value;
                            checkFilledFields();
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;                       
                }
            });
            
        });
    };

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

    checkFilledFields();
};

export default changeModalState;