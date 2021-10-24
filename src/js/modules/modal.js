import calcScroll from "./calcScroll";

function modal(btnSelector, modalSelector, closeSelector, showByTime, closeOnOverlay = 'true') {
    const modalBtns = document.querySelectorAll(btnSelector),
          modal = document.querySelector(modalSelector),
          closeBtn = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();
   
    let modalTimer;
    
    const showModal = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
        // document.body.classList.add('modal-open');
    };

    const hideModal = function() {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        // document.body.classList.remove('modal-open');
    };

    if (showByTime) {
        modalTimer = setTimeout(showModal, 60000);
    }

    modalBtns.forEach(item => item.addEventListener('click', (e) => {
        if (e.target) {
            e.preventDefault();
        }
        
        clearInterval(modalTimer);
        windows.forEach(window => window.style.display = 'none');

        showModal();
    }));

    modal.addEventListener('click', (e) => {
        if ((closeOnOverlay && e.target == modal) || e.target == closeBtn ||
        e.target == closeBtn.firstElementChild) {
            windows.forEach(window => window.style.display = 'none');

            hideModal();
        }
    });
}

export default modal;