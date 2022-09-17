const tabs = document.querySelectorAll('.tabs');


[...tabs].forEach((elements) => {
    const tabItem = elements.querySelectorAll('.tab');
    const tabContent = elements.querySelectorAll('.tab__content');
    let tabIndex = [...tabItem].indexOf(elements.querySelector('.tab.tab_active'));

   [...tabItem].forEach((tab, currentIndex) => {
        tab.addEventListener('click', (e) => {
            tabItem[tabIndex].classList.remove('tab_active');
            tabContent[tabIndex].classList.remove('tab__content_active');
            tab.classList.add('tab_active');
            tabContent[currentIndex].classList.add('tab__content_active');
            tabIndex = currentIndex;
        } )
    })
})

