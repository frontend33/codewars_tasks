const formatterDateString = (dateNum, unit) =>
    dateNum <= 1 ? `${dateNum} ${unit}, ` : `${dateNum} ${unit}s, `;

function formatDuration(seconds) {
    let tmpSeconds = seconds;
    let result = "";
    if (seconds === 0) return 'now'

    if (seconds < 60) {
        return seconds <= 1 ? `${seconds} second` : `${seconds} seconds`;
    }

    const CALC_PER_MINUTES = 60;
    const CALC_PER_HOURS = CALC_PER_MINUTES * 60;
    const CALC_PER_DAYS = CALC_PER_HOURS * 24;
    const CALC_PER_YEARS = CALC_PER_DAYS * 365;

    const numYears = Math.floor(tmpSeconds / CALC_PER_YEARS);
    tmpSeconds -= numYears * CALC_PER_YEARS;
    const numDays = Math.floor(tmpSeconds / CALC_PER_DAYS);
    tmpSeconds -= numDays * CALC_PER_DAYS;
    const numHours = Math.floor(tmpSeconds / CALC_PER_HOURS);
    tmpSeconds -= numHours * CALC_PER_HOURS;
    const numMinutes = Math.floor(tmpSeconds / CALC_PER_MINUTES);
    tmpSeconds -= numMinutes * CALC_PER_MINUTES;
    result += numYears > 0 ? formatterDateString(numYears, "year") : "";
    result += numDays > 0 ? formatterDateString(numDays, "day") : "";
    result += numHours > 0 ? formatterDateString(numHours, "hour") : "";
    result += numMinutes > 0 ? formatterDateString(numMinutes, "minute") : "";
    result += tmpSeconds > 0 ? formatterDateString(tmpSeconds, "second") : "";

    let idx = result.lastIndexOf(",");
    result = result.substr(0, result.lastIndexOf(","));

    idx = result.lastIndexOf(", ");
    if (idx > 0) {
        result = result.substr(0, idx) + " and " + result.substr(idx + 2);
    }
    return result;
}
