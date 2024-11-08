/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let obj = {};
  for (let x of text){
    obj[x] = (obj[x] || 0) +1;
  }
  const balloon = {b:1, a:1, l:2, o:2, n:1}
  let maxBalloons = Infinity;

  for(let y in balloon){
    if(!obj[y]) return 0;
    maxBalloons = Math.min(maxBalloons, Math.floor(obj[y] / balloon[y]));
  }
  return maxBalloons
};