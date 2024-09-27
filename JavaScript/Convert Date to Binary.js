/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const[year,month,day]=date.split("-").map(Number);
    let =r1=year.toString(2);
    let =r2=month.toString(2);
    let =r3=day.toString(2);
    return `${r1}-${r2}-${r3}`
 
 };
const date = "2080-02-29"
console.log(convertDateToBinary(date))