function createPersonalTemplate() {
    let films = document.querySelector('.films__container');
    let template = document.querySelector('.personal-template');
    let clone = document.importNode(template.content, true);
    films.append(clone);
}

function createMoviesFromTemplate() {
    let films = document.querySelector('.personal');
    let template = document.querySelector('.films-template');
    let clone = document.importNode(template.content, true);
    films.append(clone);
}

function createFilmTemplate(key) {
    let films = document.querySelector('.movie__container');
    let template = document.querySelector('.film-content-template');
    template.content.querySelector('.film-content').setAttribute('id', key);
    let clone = document.importNode(template.content, true);
    films.append(clone);
}

function createSerialsFromTemplate() {
    let films = document.querySelector('.personal');
    let template = document.querySelector('.serials-template');
    let clone = document.importNode(template.content, true);
    films.append(clone);
}

function createSerialTemplate(key) {
    let serials = document.querySelector('.serial__container');
    let template = document.querySelector('.serial-content-template');
    template.content.querySelector('.serial-content').setAttribute('id', `${key}S`);
    let clone = document.importNode(template.content, true);
    serials.append(clone);
}

function createGenresFromTemplate() {
    let genres = document.querySelector('.personal');
    let template = document.querySelector('.genre-template');
    let clone = document.importNode(template.content, true);
    genres.append(clone);
}

function createGenreTemplate(key) {
    let genres = document.querySelector('.genres__container');
    let template = document.querySelector('.genre-content-template');
    template.content.querySelector('.genre-content').setAttribute('id', `${key}`);
    template.content.querySelector('.genre-content__header').innerHTML = key;
    let clone = document.importNode(template.content, true);
    genres.append(clone);
}

function createTopGenreTemplate(key, movie) {
    let genre = document.querySelector(`#${key} .genre-content__container`);
    let template = document.querySelector('.genre-films-content-template');
    template.content.querySelector('.genre-films-content').setAttribute('id', `${key}-${movie}M`);
    let clone = document.importNode(template.content, true);
    genre.append(clone);
}

function createHistoryFromTemplate() {
    let history = document.querySelector('.personal');
    let template = document.querySelector('.history-films-template');
    let clone = document.importNode(template.content, true);
    history.append(clone);
}

function createHistoryFilmTemplate(key) {
    let history = document.querySelector('.history-films__container');
    let template = document.querySelector('.history-film-content-template');
    template.content.querySelector('.history-film-content').setAttribute('id', `${key}H`);
    let clone = document.importNode(template.content, true);
    history.append(clone);
}
