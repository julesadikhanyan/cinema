async function getRecommendations() {
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
}