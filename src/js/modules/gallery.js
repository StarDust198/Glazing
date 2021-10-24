import modal from './modal';

const gallery = (thumbsSelector) => {
    const galleryLinks = document.querySelectorAll(thumbsSelector);

    galleryLinks.forEach((link, i) => {
        link.classList.add(`gallery_image${i}`);
        const overlay = document.createElement('div');
        overlay.classList.add('popup', `popup_gallery${i}`);

        overlay.innerHTML = `
            <div class="popup_dialog">
                <div style="width: auto;" class="popup_content text-center">
                    <button type="button" class="popup_close"><strong>&times;</strong></button>
                    <img src="${link.href}" alt="example">
                </div>
            </div>`;

        console.log(overlay);
        document.body.append(overlay);

        modal(`.gallery_image${i}`, `.popup_gallery${i}`, `.popup_gallery${i} .popup_close`);
    });
};

export default gallery;