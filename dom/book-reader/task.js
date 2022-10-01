const book = document.getElementById('book')
const controlFontSize = document.querySelector('.book__control_font-size');
const controlColor = document.querySelector('.book__control_color');
const controlBackground = document.querySelector('.book__control_background');


[...controlFontSize.children].forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        [...controlFontSize.children].forEach((item) => {
            item.classList.remove('font-size_active');
        })
        element.classList.add('font-size_active')

        if (element.dataset.size === 'small') {
            if (book.classList.contains('book_fs-big')) {
                book.classList.remove('book_fs-big');
            }
            book.classList.add('book_fs-small');
        } else if (element.dataset.size === 'big') {
            if (book.classList.contains('book_fs-small')) {
                book.classList.remove('book_fs-small');
            }
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
    })
});
[...controlColor.children].forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        [...controlColor.children].forEach((item) => {
            item.classList.remove('color_active');
        })
        element.classList.add('color_active')

        if (element.dataset.textColor === 'black') {
            if (book.classList.contains('book_color-gray')) {
                book.classList.remove('book_color-gray');
            }
            if (book.classList.contains('book_color-whitesmoke')) {
                book.classList.remove('book_color-whitesmoke');
            }
            book.classList.add('book_color-black');
        } 
        if (element.dataset.textColor === 'gray') {
            if (book.classList.contains('book_color-black')) {
                book.classList.remove('book_color-black');
            }
            if (book.classList.contains('book_color-whitesmoke')) {
                book.classList.remove('book_color-whitesmoke');
            }
            book.classList.add('book_color-gray');
        }
        if (element.dataset.textColor === 'whitesmoke') {
            if (book.classList.contains('book_color-black')) {
                book.classList.remove('book_color-black');
            }
            if (book.classList.contains('book_color-gray')) {
                book.classList.remove('book_color-gray');
            }
            book.classList.add('book_color-whitesmoke');
        }
    })
});
[...controlBackground.children].forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        [...controlBackground.children].forEach((item) => {
            item.classList.remove('color_active');
        })
        element.classList.add('color_active')

        if (element.dataset.bgColor === 'black') {
            if (book.classList.contains('book_bg-gray')) {
                book.classList.remove('book_bg-gray');
            }
            if (book.classList.contains('book_bg-white')) {
                book.classList.remove('book_bg-white');
            }
            book.classList.add('book_bg-black');
        } 
        if (element.dataset.bgColor === 'gray') {
            if (book.classList.contains('book_bg-black')) {
                book.classList.remove('book_bg-black');
            }
            if (book.classList.contains('book_bg-white')) {
                book.classList.remove('book_bg-white');
            }
            book.classList.add('book_bg-gray');
        }
        if (element.dataset.bgColor === 'white') {
            if (book.classList.contains('book_bg-black')) {
                book.classList.remove('book_bg-black');
            }
            if (book.classList.contains('book_bg-gray')) {
                book.classList.remove('book_bg-gray');
            }
            book.classList.add('book_bg-white');
        }
    })
});

