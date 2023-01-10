/*
 * @Author: yxd
 * @Date: 2023-01-10 23:44:32
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-01-11 00:06:25
 * @Description: 括号匹配  test
 */

import { matchBracket } from './match-backet'

describe("括号匹配", () => {
  it('正常情况', () => { 
    const str = '[a{a(d)s}sss]'
    const res = matchBracket(str)
    expect(res).toBe(true)
  })

  it('不匹配', () => { 
    const str = 'a{a(d)s}sss]'
    const res = matchBracket(str)
    expect(res).toBe(false)
  })


  it('空字符串', () => {  
    expect( matchBracket('')).toBe(true)
  })
})
