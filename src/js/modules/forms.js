function forms(formSelector) {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            const obj = {};

            formData.forEach((value, key) => obj[key] = value);

            const json = JSON.stringify(obj);

            fetch('./assets/server.php', {
                method: 'POST',
                body: json,
                headers: { 'Content-type': 'application/json' }
            }).then(response => {
                console.log(response);
                // showThanksModal(message.success);
                form.reset();
                // statusMessage.remove();
            }).catch((error) => {
                // showThanksModal(message.failure);
                console.log(error);
            }).finally(() => {
                form.reset();
            });
        });
    });
}

export default forms;