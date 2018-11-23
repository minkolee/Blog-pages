// 遍历节点的时候可以反向遍历列表,避免列表变化
// 如果你想要获得一个固定的节点集合，可以使用数组的 Array.from 方法将其转换成实际数组。

// getBoundingClientRect 获取四角位置
// 加上 windows.pageXOffset window.pageYOffset可以计算实际位置相对于文档的偏移

//
// 与 getElementsByTagName 这类方法不同，由 querySelectorAll 返回的对象不是动态变更的。
// 修改文档时其内容不会被修改。但它仍然不是一个真正的数组，所以如果你打算将其看做真
// 的数组，你仍然需要调用 Array.from 。