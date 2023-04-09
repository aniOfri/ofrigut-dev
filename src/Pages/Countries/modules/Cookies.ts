function checkCookies() {
    const COOKIES = ["ScoreCountries", "HighscoreCountries", "MinPopCountries", "TimerCountries", "ShowInfoCountries", "HealthCountries"];

    return COOKIES.some(v => !document.cookie.includes(v));
}

function createCookies() {
    document.cookie = "ScoreCountries=0";
    document.cookie = "HighscoreCountries=0";
    document.cookie = "TimerCountries=false";
    document.cookie = "MinPopCountries=0";
    document.cookie = "ShowInfoCountries=true";
    document.cookie = "HealthCountries=true";
}

export { checkCookies, createCookies };