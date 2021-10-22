function tabs(linksSelecor, tabsSelector, activeClass, activeSelector = '', display = 'block') {
    const tabLinks = document.querySelectorAll(linksSelecor),
          tabs = document.querySelectorAll(tabsSelector);

    const showTab = function(n = 0) {
        tabs.forEach(tab => tab.style.display = 'none');
        tabs[n].style.display = display;
        if (activeSelector) {
            tabLinks.forEach(item => item.querySelector(activeSelector).classList.remove(activeClass));
            tabLinks[n].querySelector(activeSelector).classList.add(activeClass);
        } else {
            tabLinks.forEach(item => item.classList.remove(activeClass));
            tabLinks[n].classList.add(activeClass);
        }
    };
    
    showTab();

    tabLinks.forEach((link, i) => link.addEventListener('click', () => showTab(i)));
}

export default tabs;