# 第三章 基础的五个DOM方法

### DOM 获取元素的基础方法

+ getElementById,是docoment对象特有的函数
+ getElementsByTagName,按照标签获取元素,返回的是一个数组,这个方法可以使用在任意元素节点上
+ getElementsByClassName,按照CSS类名获取元素,HTML5 DOM新增,可以作用在任何元素上.**还可以同时查询多个类.**
+ getAttribute(name),可以使用在任意元素上,获取指定的名称的属性,这个方法不能用于document对象.如果没有,会返回null.可以在获取属性的时候进行判断.
+ setAttribute(name),设置属性,可以设置内置属性,也可以设置自定义属性.

这五个方法是很多DOM操作的基石,都是DOM 1级方法,一般浏览器都适用.


# 第四章  图片库项目

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

# 第五章 平稳退化

### window对象，简单的打开新窗口

    window.open(url, name, features)
    
url是字符串格式的URL，name是窗口名称，features是一些参数，常用的是width和height


### javascript: 伪协议

    <a href="javascript:window.open('http://conyli.cc')>example</a>
    
运用伪协议的方法很不好，但是在前端的时候可以埋javascript:void来提示该处需要一个JS功能。
而且直接使用伪协议，无法平稳退化，禁用了JS功能链接就失效。
内嵌的事件处理函数，就像上一章编写的那样，是无法实现平稳退化的。但是我们的应用本身就需要JS来实现，这就不是平稳退化。


### 分离JS文件的核心就是不要直接使用内嵌代码,而是先获得元素然后绑定事件

### 向后兼容,即先检测浏览器是否具备该方法,通常使用:

    if(!method){
        return false;
    }else {
    }

需要测试多个,则使用逻辑或

### 和JS实战介绍的内容一样,不需要使用浏览器嗅探技术

### 性能考虑,对于多次使用的DOM元素,通过变量保存一个引用,可以加速DOM的性能.

### 合并和压缩脚本,采用一些工具进行.比如 JSMin, YUI (现代的Node和NPM有其他工具,这里的已经过时)

### 平稳退化的时候,对于每一步的事件,都要判断其中的元素是否存在,如果不存在,就返回能够让默认事件覆盖的行为,如果存在,再进一步执行程序.

### 对于Web文档,除了使用上述的DOM标准方法之外,还可以直接使用元素的.src .href 等核心方法.

### 绑定事件可以返回一个布尔值,用于控制是否触发默认事件

# 第七章

### 传统的向DOM写入内容的方法是

    document.write()
    
写入的内容会被当做HTML代码解析,不会转义.

### innerHTML属性  可以直接将该元素内部的所有替换成指定的HTML代码,支持读入和写入

### createElement:
    document.createElement('tagname')
这个只能用于document对象,可以赋给一个变量引用,之后将其插入DOM,也还保留着对应的引用
一旦新建一个元素,这个元素就拥有了nodeType和nodeName两个属性.


### appendChild
    parent.appendChild(child)
将child插入到parent内部作为其最后一个子节点


### createTextNode
    document.createTextNode(text)
凡是创建节点,都是document对象的方法.
将文本节点插入到父节点中即可修改其中的文本内容.

### insertBefore
这个和之前操作节点不同,是操作元素,一定要注意.元素的父元素只能是元素.
在父元素上调用,第一个参数是新元素,第二个参数是父元素的某个子元素,将新元素插入到子元素之前成为一个新的子元素

    parentElement.insertBefore(newElement, targetElement)

### nextSibling 属性
返回下一个紧挨的节点
    
### previousSibling 属性
返回上一个紧挨的节点
    
    
### nextElementSibling 不是DOM Core,下一个元素.


# 第九章  JS与CSS的联系
为了解耦,一般不直接设置样式,除非是特别制作的特效.
JS一般只用来切换CSS类.然而具体操作CSS的方法也必须知道.
对于元素的CSS不会直接通过属性节点来操作.而是使用元素的style属性
style 是一个对象,包含所有的CSS属性,用CSS属性名的驼峰写法可以设置具体的CSS属性
注意,这里设置的属性是覆盖一层,而不是替代原来的属性
比如CSS中设置了一个文字为绿色,然后通过JS修改为红色.再通过JS去掉红色后,并不是显示默认的黑色,而是显示原来的绿色.

style也能够获取样式,但仅限于内联样式

### className 
单独设置一个类名,可读可写,设置的时候替换原来的所有类名,如果想使用这个函数操作多个class就必须编写自己检测并且拼接字符串的函数.

