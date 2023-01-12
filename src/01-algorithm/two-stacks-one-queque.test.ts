/*
 * @Author: yxd 
 * @Date: 2023-01-12 16:20:48
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-01-12 16:46:13
 * @Description: 两个栈,一个队列test
 */

import { MyQueue } from './two-stacks-one-queque'

describe('两个栈,一个队列',()=>{
  it('and and length',()=>{
    const q =new MyQueue()
    expect(q.length).toBe(0)

    q.add(100)
    q.add(200)
    q.add(300)

    expect(q.length).toBe(3)
  })

  it('delete',()=>{
    const q = new MyQueue()
    expect(q.delete()).toBeNull()

    q.add(100)
    q.add(200)
    q.add(300)

    expect(q.delete()).toBe(100)
    expect(q.length).toBe(2)
    expect(q.delete()).toBe(200)
    expect(q.length).toBe(1)
  })
})
