// https://codepen.io/fannietaeyang/pen/xOQzvq

window.onload = initAll;

Array.prototype.popRand = function () {
    var i = Math.floor(Math.random() * this.length);
    return this.splice(i, 1)
}

var thrive_elems = [
    '"joking aside"',
    'cabbage callback',
    'a new weird inside joke',
    'laser-focused',
    'double click',
    'sports team loyalty reference',
    'diversity / DEI',
    'women\'s month',
    'burnout',
    'speakers with conflicting thesis statements',
    'ARPU',
    'cringey scripted comedy',
    'reference stock prices',
    'mentioning layoffs',
    'fight in the chat',
    'food montage in a video',
    'flywheel',
    'a toast customer is wearing a cool shirt',
    'stupid feature idea that makes no sense (ToastCoin, etc.)',
    'toaster reading a script in the most wooden way possible',
    'bread puns',
    'a presenter talks about being hungry',
    '"Live at Thrive"',
    'stupid c-suite gimmick',
    '"...as OneTeam"',
    'technical issues',
    'bringing your whole self to work',
    'mentioning the swag offerings',
    '"and I am a Toaster"'
 ];

const boards = {
    "thrive": thrive_elems,
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
