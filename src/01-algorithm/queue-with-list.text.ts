/*
 * @Author: yxd
 * @Date: 2023-01-18 15:01:10
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-01-18 15:03:32
 * @Description: 链表实现队列.测试
 */

import { MyQueue } from './queue-with-list'

describe('链表实现队列',()=>{
  it('add and length',()=>{
    const q = new MyQueue()
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
    expect(q.delete()).toBe(100)
    expect(q.delete()).toBeNull()
  })
})