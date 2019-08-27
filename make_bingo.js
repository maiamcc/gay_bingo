// https://codepen.io/fannietaeyang/pen/xOQzvq

window.onload = initAll;

Array.prototype.popRand = function () {
    var i = Math.floor(Math.random() * this.length);
    return this.splice(i, 1)
}

var words = ['flash', 'inform', 'hum', 'defective', 'glossy',
    'minister', 'cloistered', 'smash', 'narrow', 'reply',
    'aboriginal', 'reflective', 'brake', 'hover', 'carriage',
    'advice', 'receive', 'tawdry', 'cook', 'enter',
    'scrub', 'tearful', 'ring', 'groan', 'untidy',
    'sun', 'same', 'believe', 'move', 'stale',
    'rule', 'desire', 'run', 'snow', 'train',
    'early', 'thick', 'adventurous', 'tender', 'listen',
    'guard', 'pocket', 'account', 'symptomatic', 'round',
    'complete', 'obtain', 'stocking', 'grin', 'friendly']

function initAll() {
    if (document.getElementById) {
        newCard();
    }
    else {
        alert("Sorry, your browser doesn't support this script");
    }
}

function newCard() {
    for (let i = 0; i < 24; i++) {
        setSquareAtIndex(i);
    }
}

function setSquareAtIndex(i) {
    var id = squareIdForIndex(i)
    var wd = words.popRand()
    document.getElementById(id).innerHTML = wd;
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