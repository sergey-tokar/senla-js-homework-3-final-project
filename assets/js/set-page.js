import renderMainPage from "./render-main-page.js";

export default async function setPage(event) {
    if (!event.target.classList.contains('pagination-item__button')) {
        return;
    }
    const currentPage = document.querySelector('.pagination-item__button.selected').getAttribute('data-page');
    let necessaryPage = event.target.getAttribute('data-page');
    if (necessaryPage === "previous") {
        necessaryPage = previousPage(currentPage);
    } else if (necessaryPage === "next") {
        necessaryPage = nextPage(currentPage);
    }
    await renderMainPage(necessaryPage);
    sessionStorage.setItem('page', JSON.stringify(necessaryPage));
}

function previousPage(page) {
    if (page === '1') {
        return page;
    }
    return --page;
}

function nextPage(page) {
    if (page === '15') {
        return page;
    }
    return ++page;
}
