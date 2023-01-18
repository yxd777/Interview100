/*
 * @Author: yxd
 * @Date: 2023-01-18 15:35:34
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-01-18 15:38:29
 * @Description: 二分法 测试
 */

import { binarySearch1 } from './binary-search'

describe('二分法',()=>{
  it('normal',()=>{
    const arr=[100,200,300,400]
    const indexRes=binarySearch1(arr,300)
    expect(indexRes).toBe(2)
  })

  it('enpty  array',()=>{
    const arr=[]
    const indexRes=binarySearch1(arr,300)
    expect(indexRes).toBe(-1)
  })

  it('not found',()=>{
    const arr=[100,200,300,400]
    const indexRes=binarySearch1(arr,333)
    expect(indexRes).toBe(-1)
  })
})