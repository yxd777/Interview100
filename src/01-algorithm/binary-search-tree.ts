/*
 * @Author: yxd
 * @Date: 2023-01-18 21:16:16
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-01-18 21:33:16
 * @Description: 一个二叉搜索树，求其中的第 K 小的节点的值。
 */

export interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

const arr :number[]=[]

/**
 * 二叉树前序遍历
 * @param node 
 * @returns 
 */
export function preOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  arr.push(node.value) 
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}

/**
 * 二叉树中序遍历
 * @param node  
 */
 export function inOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  inOrderTraverse(node.left)
  arr.push(node.value) 
  inOrderTraverse(node.right)
}

/**
 * 二叉树后序遍历
 * @param node  
 */
 export function postOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  arr.push(node.value) 
}


/**
 * 寻找BST里的第K小值
 * @param node tree node
 * @param k 第几个值
 */
export function getKthValue(node:ITreeNode,k:number):number|null{
  inOrderTraverse(node)
  return arr[k-1]||null
}




export const bst: ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: { value: 2, left: null, right: null },
    right: { value: 4, left: null, right: null },
  },
  right: {
    value: 7,
    left: { value: 6, left: null, right: null },
    right: { value: 8, left: null, right: null },
  }
}

