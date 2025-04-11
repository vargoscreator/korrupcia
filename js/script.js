const langBlock = document.querySelector('.header__lang');
const langSelected = document.querySelector('.header__lang-selected');
langSelected.addEventListener('click', function (event) {
    langBlock.classList.toggle('active');
    event.stopPropagation();
});
document.addEventListener('click', function (event) {
    if (!langBlock.contains(event.target)) {
        langBlock.classList.remove('active');
    }
});


const menuBtn = document.querySelector('.header__menu-open');
const header = document.querySelector('.header');
menuBtn.addEventListener('click', function () {
    header.classList.toggle('show-menu');
});


document.querySelectorAll('.selectService__select-title').forEach(title => {
    title.addEventListener('click', function () {
        const parentBlock = this.closest('.selectService__block');
        if (parentBlock.classList.contains('active')) {
            parentBlock.classList.remove('active');
        } else {
            document.querySelectorAll('.selectService__block').forEach(block => {
                block.classList.remove('active');
            });
            parentBlock.classList.add('active');
        }
    });
});
