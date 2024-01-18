// Данный js файл будет окрашивать фон шапки страницы из непрозрачного в белый, а также показывать border-bottom

let header = document.querySelector('.header');

function paintHeader() {
  document.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      header.classList.add('header--colored');
    } else {
      header.classList.remove('header--colored');
    }
  });
}

export {paintHeader};
