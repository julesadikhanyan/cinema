async function getRecommendations() {
    const ID = document.querySelector(".enter-form__input").value;

    let isExist = await fetchIsExist(ID);
    if (isExist.content.exist === true) {
        await fetchRecommendations(ID);
        await fetchGenre(ID);
        await fetchHistory(ID);
    }

    document.querySelector(".enter-form__input").value = "";
}


/*async function printRecommendations(data) {
    let countFilms = Object.keys(data.content.films).length;
    let countSerials = Object.keys(data.content.serials).length

    if (countFilms > 0) {
        createFromTemplate();
        for(let key in data.content.films) {
            createFilmTemplate(key);
            printInfoFilm(data.content.films[key], key);
        }
    }
    if (countSerials > 0) {
        createSerialsFromTemplate();
        for(let key in data.content.serials) {
            createSerialTemplate(key);
            printInfoSerial(data.content.serials[key], key);
        }
    }
}*/