### 判断字符串是否括号匹配
>题目
>	- 一个字符串s可能包含{}()[] 三种括号
>	- 判断s是否是括号匹配的
>	- 如(a{b}c)为匹配 

### 栈
 - 先进后出
 - API:push pop length
 - 相关的:队列,堆

### 逻辑结构 VS 物理结构
- 栈和数组的关系就像是java和JavaScript的关系!
- 栈,逻辑结构.理论模型,不管如何实现,不受任何语言的限制
- 数组,物理结构.真实的功能实现,受限与编程语言

### 解题思路
- 遇到左括号就压栈
- 遇见右括号就判断栈顶,匹配就出栈
- 最后判断length是否为0