# CSS4 Missing Manuals 笔记

## 第三章 选择符

所有的选择器，都可以连用。

### 1 类型选择符--选取HTML标签名

```CSS
p {
    border: 1px solid black;
}
```

可以选择同名的所有HTML标签

### 2 类选择符--精确控制某一个类型,必须给HTML标签设置一个类名

```css
.copyright {
    color: #fff;
}
```

一个标签可以同时使用多个类,用空格分割类名.

常见类的使用是,使用一个类控制一个类别的基础样式,再用特定的类控制这个类别中具体类别的表现形式,比如UI框架中经常使用的按钮类:

```html
<button class="btn btn-primary">Click Me</button>

.btn {
	......
}

.btn-primary {
	......
}
```

### 3 ID选择符--精确选择某一个指定元素,一个页面内只有一个ID元素

```CSS
#submitbutton {
    border-raidus: 10px;
}
```

Web设计中，CSS语言较少使用ID选择符。ID通常用于JS程序控制。

### 4 标签组选择符

```CSS
h1, h2, h3 {
    color: #F1CD33;
}
```

逗号分割的部分是平行的，即样式将同时用于所有的h1, h2, h3标签。

还可以使用通用选择符*号。

```
* {
    margin: 0;
    padding: 0;
}
```

### 5 后代选择符

```css
.main a {
    text-decoration: none;
}
```

选择.main类之下的所有a标签，后代指的是所有该标签之中符合条件的内容，而不是子代

### 6 属性选择符

```
a[href="http://conyli.cc"] {
    color: orange;
}
```

选择所有具备该属性条件的标签或者其他类型的带有属性的选择器。

### 7 子代选择符

```
ul>li {
    display:inline-block;
}
```

选择某个选择器的子代元素。

### 8 同辈选择符

```
h2 + p {
    text-align: center;
}
h2 ~ p {
    text-align: center;
}
```

### 9 伪类和伪元素

- a:link 尚未单击的普通链接，伪类

- a:visited 已访问的链接，伪类

- a:hover 修改鼠标悬停其上的链接， :hover伪类可用于任何元素

- a:active 按下鼠标到松开之前那很短的一段时间，伪类

  现代Web设计一般将 link和visited设置为一组，hover和active一组设置，这样使得链接只有两种外形，简洁

- ::first-letter 第一个字母，伪元素，CSS3中伪元素以两个冒号开始
- ::first-line 第一行，伪元素
- :focus 伪类，当元素获得焦点的时候生效
- ::after 伪元素，在前部选择器的内部的最后插入内容，使用content 参数添加内容，非常常用
- ::before 伪元素，在前部选择器的内部的最前边插入内容，非常常用
- ::selection 伪元素，用户在网页中选择的内容，单独使用即可，无需在前边添加其他选择器。这个伪元素没有单冒号版本

### 10 子代中的特殊伪类

- :first-child 作为其他元素的子元素的第一个选择器
- :last-child 作为其他元素的子元素的最后一个选择器
- :only-child 作为其他元素的唯一一个子元素的选择器
- :nth-child 带括号参数
- :first-of-type 作为其他元素的子代的第一个某个类型的元素
- :last-of-type 作为其他元素的子代的最后一个某个类型的元素
- :nth-of-type 使用括号参数来灵活选择

### 11 特殊选择符

:target 与ID和锚点配合使用

:not 括号里指定选择器中取反的部分：

```CSS
p:not(.classy) {color:blue;}
```

