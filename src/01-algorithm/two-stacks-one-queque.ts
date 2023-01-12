/*
 * @Author: yxd
 * @Date: 2023-01-12 16:07:55
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-01-12 16:49:10
 * @Description: 两个栈,一个队列
 */

export class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []

  add(n: number) {
    this.stack1.push(n)
  }
  delete(): number | null {
    let res

    const stack1 = this.stack1
    const stack2 = this.stack2

    // 将stack1所有元素移动到stack2中
    while (stack1.length) {
      const n = stack1.pop()
      if (n != null) {
        stack2.push(n)
      }
    }

    // stack2 pop()
    res = stack2.pop()

    // 将stack2所有元素 还给 stack1
    while (stack2.length) {
      const n = stack2.pop()
      if (n != null) {
        stack1.push(n)
      }
    }

    return res||null
  }
  get length(): number {
    return this.stack1.length
  }
}