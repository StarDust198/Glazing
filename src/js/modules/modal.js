function modal(btnSelector, modalSelector, closeSelector, showByTime) {
    const modalBtns = document.querySelectorAll(btnSelector),
          modal = document.querySelector(modalSelector),
          closeBtn = document.querySelector(closeSelector);

    let modalTimer;
    
    const showModal = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        // document.body.classList.add('modal-open');
    };

    const hideModal = function() {
        modal.style.display = "none";
        document.body.style.overflow = "";
        // document.body.classList.remove('modal-open');
    };

    if (showByTime) {
        modalTimer = setTimeout(showModal, 60000);
    }

    modalBtns.forEach(item => item.addEventListener('click', (e) => {
        if (e.target) {
            e.preventDefault();
        }
        
        showModal();
    }));

    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target == closeBtn || e.target == closeBtn.firstElementChild) {
            hideModal();
        }
    });
}

export default modal;