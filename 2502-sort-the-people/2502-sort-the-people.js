/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let people = names.map((name, i) => [name, heights[i]]);
    people.sort((a, b) => b[1] - a[1]);
    return people.map(person => person[0]);
};