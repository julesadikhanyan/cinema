function printFilms(data) {
    let countMovies = Object.keys(data.content).length;
    let idNumber = 0;
    if (countMovies > 0) {
        createMoviesFromTemplate();
        for(let key in data.content) {
            idNumber++;
            createFilmTemplate(key, idNumber);
            printFilmInformation(data.content[key], key);
        }
    }
}

function printFilmInformation(film, id) {
    let filmContainer = document.getElementById(id);
    filmContainer.querySelector(".film-content__name").innerHTML = film.name;
    let genreString = film.genre.toString();
    genreString = genreString.replaceAll(",", " ");
    filmContainer.querySelector(".film-content__genre").innerHTML = genreString;
}

function printFilmsPerGenre(data) {
    let countGenres = Object.keys(data.content).length;
    if (countGenres > 0) {
        createGenresFromTemplate();
        for(let key in data.content) {
            createGenreTemplate(key);
            for (let movie in data.content[key]) {
                createTopGenreTemplate(key, movie);
                printFilmPerGenreInformation(data.content[key][movie], movie, key);
            }
        }
    }
}

function printFilmPerGenreInformation(movie, id, key) {
    let filmPerGenreContainer = document.getElementById(`${key}-${id}M`);
    filmPerGenreContainer.querySelector(".genre-films-content__name").innerHTML = movie.name;
    filmPerGenreContainer.querySelector(".genre-films-content__type").innerHTML = movie.type;
}

function printHistory(data) {
    let countHistory = Object.keys(data.content).length;

    if (countHistory > 0) {
        createHistoryFromTemplate();
        for(let key in data.content) {
            createHistoryFilmTemplate(key);
            printHistoryFilmInformation(data.content[key], key);
        }
    }
}

function printHistoryFilmInformation(movie, key) {
    let historyFilmContainer = document.getElementById(`${key}H`);
    historyFilmContainer.querySelector(".history-film-content__name").innerHTML = movie;
}

function AllMovies() {
    let hiddenMovies = document.querySelectorAll(".hidden-movie");
    for (let i = 0; i < hiddenMovies.length; i++) {
        if (hiddenMovies[i].style.display === "none") {
            hiddenMovies[i].style.display = "flex";
            document.querySelector(".movie__button ").innerHTML = "Скрыть фильмы";
        } else {
            hiddenMovies[i].style.display = "none";
            document.querySelector(".movie__button ").innerHTML = "Показать все фильмы и сериалы";
        }
    }
}