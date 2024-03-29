/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	const dfs = (root, p, q) => {
		if (root === null || root === p || root === q) return root
		let left = dfs(root.left, p, q)
		let right = dfs(root.right, p, q)
		if (left === null && right === null) {
			return null
		}
		if (left === null) return right
		if (right === null) return left
		return root
	}
	return dfs(root, p, q)
}
