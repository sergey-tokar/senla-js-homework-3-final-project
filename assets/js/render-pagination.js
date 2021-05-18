export default function renderPagination(page) {
    page = +page;
    document.querySelectorAll('.pagination-item__button').forEach(button => {
        button.classList.remove('selected');
        button.parentElement.classList.remove('hidden');
    });
    document.querySelectorAll('.pagination-item__button').forEach(button => {
        if ((page > 3 && page < 13 ) && (+button.getAttribute('data-page') < page - 2 || +button.getAttribute('data-page') > page + 2 )) {
            button.parentElement.classList.add('hidden');
        } else if (page <= 3 && +button.getAttribute('data-page') > 5) {
            button.parentElement.classList.add('hidden');
        } else if (page >= 13 && +button.getAttribute('data-page') < 10) {
            button.parentElement.classList.add('hidden');
        }

        if (+button.getAttribute('data-page') === 1 || (+button.getAttribute('data-page') === 15)) {
            button.parentElement.classList.remove('hidden');
        }

        if (+button.getAttribute('data-page') === page) {
            button.classList.add('selected');
        }
    });

    document.querySelector('.first-dots').parentElement.classList.add('hidden');
    document.querySelector('.last-dots').parentElement.classList.add('hidden');
    if (page > 4) {
        document.querySelector('.first-dots').parentElement.classList.remove('hidden');
    }
    if (page < 12) {
        document.querySelector('.last-dots').parentElement.classList.remove('hidden');
    }

    document.querySelector('#previous-button').removeAttribute('disabled');
    document.querySelector('#next-button').removeAttribute('disabled');
    if (page === 1) {
        document.querySelector('#previous-button').setAttribute('disabled', 'disabled');
    }
    if (page === 15) {
        document.querySelector('#next-button').setAttribute('disabled', 'disabled');
    }
}
