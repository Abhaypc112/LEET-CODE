/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let result=0
    for(let i=0;i<root.length;i++){
        console.log(root[i]);
        
        if(root[i]>=low && root[i]<=high ){
            result+=root[i]
        }
    }
    return result
};
const root = [10,5,15,3,7,null,18], low = 7, high = 15;
console.log(rangeSumBST(root,low,high));
