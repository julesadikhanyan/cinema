window.onload = function () {
    document.querySelector('.enter-form__input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter' && document.querySelector('.enter-form__input').value !== "") {
                getRecommendations();
            }
    });
}

async function getRecommendations() {
    document.querySelector(".enter-form__button").setAttribute('disabled', true);
    if (document.querySelector(".personal") !== null) {
        document.querySelector(".personal").remove();


    }
    createPersonalTemplate();
    const ID = document.querySelector(".enter-form__input").value;

    let isExist = await fetchIsExist(ID);
    if (isExist.content.exist === true) {
        await fetchRecommendations(ID);
        await fetchGenre(ID);
        await fetchHistory(ID);
    }

    document.querySelector(".enter-form__input").value = "";
    document.querySelector(".enter-form__button").removeAttribute('disabled');
}