import calcScroll from "./calcScroll";

const modals = () => {
    function showModal(modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${calcScroll()}px`;
    }

    function hideModal(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
    }

    // timer
    const modalTimer = setTimeout(() => {
        showModal(document.querySelector('[data-modal].popup'));
    }, 60000);

    const bindModal = (btnSelector, modalSelector, closeSelector, closeOnOverlay = 'true') => {
        const modalBtns = document.querySelectorAll(btnSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
       
        modalBtns.forEach(item => item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            
            clearInterval(modalTimer);
            windows.forEach(window => window.style.display = 'none');
    
            showModal(modal);
        }));
    
        modal.addEventListener('click', (e) => {
            if ((closeOnOverlay && e.target == modal) || e.target == closeBtn ||
            e.target == closeBtn.firstElementChild) {
                windows.forEach(window => window.style.display = 'none');    
                hideModal(modal);
            }
        });
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '[data-modal].popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;