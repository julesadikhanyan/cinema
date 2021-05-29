async function printFilms(data) {
    let countMovies = Object.keys(data.content.films).length;
    let countSerials = Object.keys(data.content.serials).length;

    if (countMovies > 0) {
        createMoviesFromTemplate();
        for(let key in data.content.films) {
            createFilmTemplate(key);
            printFilmInformation(data.content.films[key], key);
        }
    }

    if (countSerials > 0) {
        createSerialsFromTemplate();
        for(let key in data.content.serials) {
            createSerialTemplate(key);
            printSerialInformation(data.content.serials[key], key);
        }
    }
}

function printFilmInformation(film, id) {
    let filmContainer = document.getElementById(id);
    filmContainer.querySelector(".film-content__name").innerHTML = film.name;
    filmContainer.querySelector(".film-content__genre").innerHTML = film.genre;
}

function printSerialInformation(serial, id) {
    let serialContainer = document.getElementById(`${id}S`);
    serialContainer.querySelector(".serial-content__name").innerHTML = serial.name;
    serialContainer.querySelector(".serial-content__genre").innerHTML = serial.genre;
}

function printFilmsPerGenre(data) {
    let countGenres = Object.keys(data.content).length;
    if (countGenres > 0) {
        createGenresFromTemplate();
        for(let key in data.content) {
            //console.log(key);
            //console.log(data.content[key]);
            createGenreTemplate(key);
            for (let movie in data.content[key]) {
                createTopGenreTemplate(key, movie);
                console.log(data.content[key][movie]);
                console.log(movie);
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

async function printHistory(data) {
    let countHistory = Object.keys(data.content).length;
    console.log(countHistory);

    if (countHistory > 0) {
        createHistoryFromTemplate();
        for(let key in data.content) {
            console.log(key);
            createHistoryFilmTemplate(key);
            await printHistoryFilmInformation(data.content[key], key);
        }
    }
}

async function printHistoryFilmInformation(movie, key) {
    let historyFilmContainer = document.getElementById(`${key}H`);
    historyFilmContainer.querySelector(".history-film-content__name").innerHTML = movie;
}

