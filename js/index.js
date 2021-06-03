function randomNumber() {
    let num = Math.floor(Math.random() * 13) + 1;
    return num;
}

function cardValue(num) {
    if (num > 1 && num < 11) {
        return num.toString();
    } else {
        switch (num) {
            case 1:
                return "A";
                break;
            case 11:
                return "J";
                break;
            case 12:
                return "Q";
                break;
            case 13:
                return "K";
                break;
        }
    }
}

function randomSuit() {
    let suit = Math.floor(Math.random() * 4) + 1;
    switch (suit) {
        case 1:
            return "♦";
            break;
        case 2:
            return "♥";
            break;
        case 3:
            return "♠";
            break;
        case 4:
            return "♣";
            break;
    }
}

window.newCard = function newCard() {
    console.log("UwU");
    document.getElementById('card-number').innerHTML = (cardValue(randomNumber()));
    let suit = randomSuit();
    if (suit === "♥" || suit === "♦") {
        document.getElementsByClassName('suit')[0].innerHTML = (suit);
        document.getElementsByClassName('suit')[1].innerHTML = (suit);
        document.getElementsByClassName('suit')[0].style["color"] = "red";
        document.getElementsByClassName('suit')[1].style["color"] = "red";
    } else {
        document.getElementsByClassName('suit')[0].innerHTML = (suit);
        document.getElementsByClassName('suit')[1].innerHTML = (suit);
    }

}