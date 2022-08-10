// https://codepen.io/fannietaeyang/pen/xOQzvq

window.onload = initAll;

Array.prototype.popRand = function () {
    var i = Math.floor(Math.random() * this.length);
    return this.splice(i, 1)
}

var wlw_elems = [
    'brightly colored hair',
    'undercut/side shave',
    'pixie cut',
    'funky lipstick',
    'non-earlobe piercing(s)',
    'doc martins',
    'flannel',
    'weird glasses',
    'rainbow belt/suspenders',
    'ties',
    '2+ cats',
    'anxiety',
    'short nails',
    'processing',
    'best friends with your ex',
    'Team Willow',
    'can\'t sit in chairs',
    'oh, she\'s not into me, she\'s just being nice',
    'body hair',
    'no makeup',
    'casual misandry',
    'astrology',
    'make your own clothes',
    'the gay nod when you see another gay in public',
    'softball / rugby / derby',
    'bikes',
    'can\'t drive',
    'can use a sword, do a martial art, real strong, in some other way deadly',
    'don\'t make your own bed but make your sweetie\'s bed when you stay over',
    'moving in after dating for under a year',
    'Indigo Girls',
    'vegetarian',
    'an ex in common with your ex and/or partner',
    'have hooked up with someone with the ~same name as you',
 ];

var bisexual_disaster_elems = [
    'an ex in common with your ex and/or partner',
    'anxiety',
    'astrology',
    'best friends with your ex',
    'mermaids',
    'brightly colored hair',
    'can use a sword, do a martial art, real strong, in some other way deadly',
    'can\'t drive',
    'can\'t sit in chairs',
    'doc martins',
    'don\'t make your own bed but make your sweetie\'s bed when you stay over',
    'flannel or jeans jacket',
    'have hooked up with someone with the ~same name as you',
    'make your own clothes',
    'non-earlobe piercing(s)',
    '"oh, they\'re not into me, they\'re just being nice"',
    'pixie cut',
    'rainbow belt/suspenders',
    'amazing eyebrows',
    'the gay nod when you see another gay in public',
    'undercut/side shave',
    'vegetarian',
    'leather jackets',
    'cuffs pants legs',
    'good taste',
    'vans',
    'indecisive',
    'has been asked to be in a threesome',
    'puns',
    '"damn they\'re both hot"',
    'purple',
    'tucks in shirt',
    'oh that person is hot! Are they a boy or a girl? Oh it doesn’t matter.',
    'stompy shoes',
    'gender squiggly',
    'crushes on villains',
    'finger gun',
    'peace signs',
    'bisexual bob (the haircut not the person)',
    'O.O women with muscles, O.O men with muscles',
    'inability to talk to attractive people',
    'questioning sexuality again',
    'frogs',
 ];

const boards = {
    "wlw": wlw_elems,
    "bisexual disaster": bisexual_disaster_elems,
};

function _getSelectedBoard() {
    var e = document.getElementById("board-select");
    var value = e.value;
    return e.options[e.selectedIndex].text.toLowerCase();
}

function getElemsForSelectedBoard() {
    var board_name = _getSelectedBoard();
    var elems = boards[board_name];
    return [...elems];
}

function populateBoardSelectDropdown() {
    var select = document.getElementById("board-select");
    var options = Object.keys(boards);

    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

function initAll() {
    if (document.getElementById) {
        populateBoardSelectDropdown();
        newCard();

        document.getElementById("new-board-btn").onclick = newCard;
        document.getElementById("board-select");
        document.querySelector('form').addEventListener('change', newCard);
    } else {
        alert("Sorry, your browser doesn't support this script");
    }
}

function newCard() {
    elems = getElemsForSelectedBoard()
    for (let i = 0; i < 24; i++) {
        var elem = elems.popRand()
        setSquareAtIndex(i, elem);
    }
}

function setSquareAtIndex(i, elem) {
    var id = squareIdForIndex(i)
    document.getElementById(id).innerHTML = elem;
    document.getElementById(id).className = "";
    document.getElementById(id).onmousedown = toggleColor;
}

function squareIdForIndex(i) {
    return "square"+i
}

function toggleColor(evt) {
    if (evt) {
        var thisSquare = evt.target;
    } else {
        var thisSquare = window.event.srcElement;
    }

    if (thisSquare.className == "") {
        thisSquare.className = "pickedBG";
    } else {
        thisSquare.className = "";
    }
}
