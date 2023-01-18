/*
 * @Author: yxd
 * @Date: 2023-01-18 14:15:09
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-01-18 14:19:43
 * @Description:  反转单项列表.test
 */

import { createLinkList, ILinkListNode, reverseLinkList } from './reverse-link-list'


describe('反转单项链表',()=>{
  it('单个元素',()=>{
    const node:ILinkListNode={value:100}
    const node1=reverseLinkList(node)
    expect(node1).toEqual({value:100})
  })
  it('多个元素',()=>{
    const node =createLinkList([100,200,300])
    const node1=reverseLinkList(node)
    expect(node1).toEqual({
      value:300,
      next:{
        value:200,
        next:{
          value:100
        }
      }
    })
  })
})