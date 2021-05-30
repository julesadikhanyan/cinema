const serverURL = "http://127.0.0.1:8000";
const recommendationURL = `${serverURL}/user_recommendation`;
const existURL = `${serverURL}/exist_user`;
const genreURL = `${serverURL}/top_films_per_genre`;
const historyURL = `${serverURL}/watch_history`;

async function fetchIsExist(ID) {
    let response = await fetch(`${existURL}?user_id=${ID}`);

    if (response.status === 422) {
        deleteLoadingTemplate();
        alert("Некорректный ID");
        document.querySelector(".enter-form__button").removeAttribute('disabled');
        throw new Error(`Status is ${response.status}`);
    }
    return response.json();


}

async function fetchRecommendations(ID) {
    let response = await fetch(`${recommendationURL}?user_id=${ID}`);

    return response.json().then((data) => {
        printFilms(data, ID);
    }).catch((err) => {
        alert(`Ошибка: ${err} Перезагрузите страницу!`);
    });
}

async function fetchGenre(ID) {
    let response = await fetch(`${genreURL}?user_id=${ID}`);

    return response.json().then((data) => {
        printFilmsPerGenre(data);
    }).catch((err) => {
        alert(`Ошибка: ${err} Перезагрузите страницу!`);
    });
}

async function fetchHistory(ID) {
    let response = await fetch(`${historyURL}?user_id=${ID}`);

    return response.json().then((data) => {
        printHistory(data);
    }).catch((err) => {
        alert(`Ошибка: ${err} Перезагрузите страницу!`);
    });
}