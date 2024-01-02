let homeScore = document.getElementById("homeScore")
let awayScore = document.getElementById("guestScore")

function homePlusOne() {
    let currentHomeScore = parseInt(homeScore.innerHTML)
    homeScore.innerHTML = (currentHomeScore + 1).toString()
}

function homePlusTwo() {
    let currentHomeScore = parseInt(homeScore.innerHTML)
    homeScore.innerHTML = (currentHomeScore + 2).toString()
}

function homePlusThree() {
    let currentHomeScore = parseInt(homeScore.innerHTML)
    homeScore.innerHTML = (currentHomeScore + 3).toString()
}

function awayPlusOne() {
    let currentAwayScore = parseInt(awayScore.innerHTML)
    awayScore.innerHTML = (currentAwayScore + 1).toString()
}

function awayPlusTwo() {
    let currentAwayScore = parseInt(awayScore.innerHTML)
    awayScore.innerHTML = (currentAwayScore + 2).toString()
}

function awayPlusThree() {
    let currentAwayScore = parseInt(awayScore.innerHTML)
    awayScore.innerHTML = (currentAwayScore + 3).toString()
}

function homeReset() {
    homeScore.innerHTML = "0"
}

function awayReset() {
    awayScore.innerHTML = "0"
}
