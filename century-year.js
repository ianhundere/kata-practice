// 1 - the long way
function centuryFromYear(year) {
    const yearHundreds = Math.floor(year / 100);
    const century = year % 100;
    if (century > 0) {
        return century + 1;
    }
    return yearHundreds;
}

// 2 - the short way
function centuryFromYear(year) {
    return year % 100 > 0 ? Math.floor(year / 100) + 1 : Math.floor(year / 100);
}

console.log(centuryFromYear(2001));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1704));
console.log(centuryFromYear(1200));
