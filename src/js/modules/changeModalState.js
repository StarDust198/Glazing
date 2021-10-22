const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelector('#width'),
          windowHeight = document.querySelector('#height'),
          windowType = document.querySelector('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    windowForm.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.form = i;
            console.log(state);
        });
    });

    windowWidth.addEventListener('input', () => {
        state.width = windowWidth.value;
        console.log(state);
    });

    windowHeight.addEventListener('input', () => {
        state.height = windowHeight.value;
        console.log(state);
    });

    windowType.addEventListener('input', () => {
        state.type = windowType.selectedIndex;
        console.log(state);
    });

    console.dir(windowProfile);
    console.dir(windowProfile[0]);
    windowProfile.forEach((item, i) => {
        item.addEventListener('change', () => {
            if (item.checked) {
                state.warm = !!i;
                windowProfile.forEach((option, j) => {
                    if (j !== i) {
                        option.checked = false;
                    }
                });
                console.log(state);
            }            
        });
    });
};

export default changeModalState;