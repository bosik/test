function handleClick(event) {
    const target = event.target;
    if (target.dataset && target.dataset.picture) {
        const picture = target.dataset.picture;
        changePicture(picture);
        history.pushState( {picture: picture}, '', "#" + picture );
    }
}

function changePicture(picture) {
    document.querySelector('.list_item').classList.remove("list_item__selected");
    document.getElementById('picture').src = 'images/' + picture;
    document.querySelector(`[data-picture="${picture}"]`).classList.add("list_item__selected");
}

function init() {
    handleClick({target: {dataset: {picture: "cat1.jpg"}}});
}

window.onpopstate = function() {
    changePicture(history.state.picture);
}
