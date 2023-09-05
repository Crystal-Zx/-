const { TreeNode } = require("../../dataStructure/BinaryTree/index")

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const root = new TreeNode(8)
root.left = new TreeNode(4)
root.right = new TreeNode(12)
let curr = root.left
curr.left = new TreeNode(2)
curr = root.right
curr.left = new TreeNode(10)
curr.right = new TreeNode(14)

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return ""
  const queue = [root],
    res = []

  while (queue.length) {
    const node = queue.shift()

    res.push(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return res.join(",")
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null
  const list = data.split(",")
  const root = new TreeNode(list[0])
  const queue = [root]

  let cursor = 1
  while (cursor < list.length) {
    const node = queue.shift()

    if (list[cursor + 1] < node.val) {
      const leftNode = new TreeNode(list[cursor++])
      node.left = leftNode
      queue.push(leftNode)
    }
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const res = serialize(root)
console.log("==> 序列化： ", res)
// console.log("==> 反序列化： ", deserialize(res))
