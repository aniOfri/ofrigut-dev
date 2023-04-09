function checkCookies() {
    const COOKIES = ["ScoreSettlements", "HighscoreSettlements", "MinPopSettlements", "TimerSettlements", "ShowInfoSettlements", "HealthSettlements"];

    return COOKIES.some(v => !document.cookie.includes(v));
}

function createCookies() {
    document.cookie = "ScoreSettlements=0";
    document.cookie = "HighscoreSettlements=0";
    document.cookie = "TimerSettlements=false";
    document.cookie = "MinPopSettlements=0";
    document.cookie = "ShowInfoSettlements=true";
    document.cookie = "HealthSettlements=true";
}

export { checkCookies, createCookies };