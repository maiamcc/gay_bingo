// https://codepen.io/fannietaeyang/pen/xOQzvq

window.onload = initAll;

Array.prototype.popRand = function () {
    var i = Math.floor(Math.random() * this.length);
    return this.splice(i, 1)
}

var elems = [
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
 ]

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
    var el = elems.popRand()
    document.getElementById(id).innerHTML = el;
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
