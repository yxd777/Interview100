/*
 * @Author: yxd
 * @Date: 2023-01-18 21:31:31
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-01-18 21:35:42
 * @Description: 二叉搜索树 第k小值
 */

import { bst, getKthValue } from './binary-search-tree'

describe('二叉搜索树 第k小值',()=>{
  it('normal',()=>{
    const res=getKthValue(bst,3) 
    expect(res).toBe(4)
  })

  it('不在范围内',()=>{
    const res=getKthValue(bst,0) 
    expect(res).toBeNull()

    const res2=getKthValue(bst,100) 
    expect(res2).toBeNull()
  })
})
