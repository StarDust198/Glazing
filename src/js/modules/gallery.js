import calcScroll from "./calcScroll";

const gallery = () => {
    const galleryField = document.querySelector('.works'),
          scroll = calcScroll();

    const overlay = document.createElement('div');
    overlay.classList.add('popup');
    overlay.style.cssText = `
        display: none;
        justify-content: center;
        align-items: center;
    `;

    const img = document.createElement('img');
    img.style.cssText = `
        display: block;
        max-height: 90%;
        max-width: 90%;
    `;
    img.alt = 'window';
    overlay.append(img);

    galleryField.append(overlay);

    galleryField.addEventListener('click', (e) => {
        e.preventDefault();
        const tgt = e.target;        

        if (tgt && tgt.classList.contains('preview')) {
            img.src = tgt.parentElement.href;
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        if (tgt && tgt === overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
};

export default gallery;