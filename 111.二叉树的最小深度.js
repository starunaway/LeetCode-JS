/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (39.81%)
 * Likes:    151
 * Dislikes: 0
 * Total Accepted:    27.9K
 * Total Submissions: 69.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
	if(root === null) return 0;
	let depth = 1;
	let node = [root];
	for (let i =0;i<node.length; i++){
		let floorKids = [];
		if(node[i].left){
			floorKids.push(node[i].left)
		}

		if(node[i.right]){ 
			floorKids.push(node[i.right])
		}

		}

	}
	return depth;
    
};
function minDepthKids(root){
	if(root === null) return 0;
	let depth =1;
}

