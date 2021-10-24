function forms(state) {
    const allForms = document.querySelectorAll('form'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]'),
          windows = document.querySelectorAll('[data-modal]');
    
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9\+\-\(\)]/g, '');
        });
    });

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data            
        });

        return await res.text();
    };

    allForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                }).catch(() => {
                    statusMessage.textContent = message.failure;
                }).finally(() => {
                    form.reset();
                    setTimeout(() => {
                        windows.forEach(window => window.style.display = 'none');               
                    }, 3000);                    
                    setTimeout(() => {
                        statusMessage.remove();                        
                    }, 5000);
                });
        });
    });
}

export default forms;