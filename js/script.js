/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      films = document.querySelectorAll('.promo__interactive-item'),
      moviesList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

/*adv.forEach(function(item) {
    item.remove();
});*/

 genre.textContent = 'Драма';

 poster.style.cssText = 'background: url("../img/bg.jpg")';

 moviesList.innerHTML = '';

 movieDB.movies.sort();

 movieDB.movies.forEach((item, i) => {
    moviesList.innerHTML += `
        <li class="promo__interactive-item"> ${i + 1} ${item}
            <div class="delete"></div>
        </li>      
    `;
 });