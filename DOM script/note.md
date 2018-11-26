# 第二章 基础的五个DOM方法

### DOM 获取元素的基础方法

+ getElementById,是docoment对象特有的函数
+ getElementsByTagName,按照标签获取元素,返回的是一个数组,这个方法可以使用在任意元素节点上
+ getElementsByClassName,按照CSS类名获取元素,HTML5 DOM新增,可以作用在任何元素上.**还可以同时查询多个类.**
+ getAttribute(name),可以使用在任意元素上,获取指定的名称的属性,这个方法不能用于document对象.如果没有,会返回null.可以在获取属性的时候进行判断.
+ setAttribute(name),设置属性,可以设置内置属性,也可以设置自定义属性.

这五个方法是很多DOM操作的基石,都是DOM 1级方法,一般浏览器都适用.


# 第三章  图片库项目

为元素设置事件:

    onclick = "function(this);return false;"

其后的return false用于阻止默认行为.


### childNodes属性

获取所有的子节点(注意,不是子元素),节点会包括所有的text li 等之类,仅是子节点,即一级,不会往下递归获取


### nodeType 属性,可以判断某个节点的类型,值是一个数字,常用的是:

+ 1 元素节点
+ 2 属性节点
+ 3 文本节点


### firstChild 和 lastChild 
返回第一个和最后一个节点

这里是采用了通用的方法,先判断childeNodes的类型,再取到text节点,再用nodeValue来修改内容.

本课的关键:

+ childNodes
+ nodeType
+ nodeValue
+ firstChild
+ lastChild