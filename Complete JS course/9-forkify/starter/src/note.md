// 导入另外一个文件的 export
//import的是另外一个文件的export的内容
// 可以任意起名,这里起名叫string

//默认导入
//如果另外一个文件导出了多个东西,可以用花括号包起来,直接使用导出的名称
import string from "./models/search";//不指定具体名称,或者自己设置变量,就对应模块里的default

//导入命名空间或者起别名
//用花括号使用模块内的接口名称
// import {add, multiply, ID} from "./models/search";
//显示所有函数和变量来测试,发现在当前模块内可以直接使用导入的模块的名称
// console.log(`using imported functions! ${add(ID, 2)} and ${multiply(3, 5)}. ${string}`);
//这里因为后台使用了node.js,所以支持import 和 export,原生的浏览器中的JS是没有的
//webpack会将所有js 打包成一个文件,所以不存在最终使用的问题.
//这就是前端工程化的好处,可以像后端一样进行模块化开发,也可以方便的导入其他人的前端工程进行开发


//想起个别名,就用as关键字,此时原来的add之类的名称在当前命名空间内就没有了,换成了自己的命名
// import {add as a, multiply as m, ID} from "./models/search";
// console.log(`using imported functions! ${a(ID, 2)} and ${m(3, 5)}. ID is ${ID}, ${string}`);


//全部导入
import * as searchView from "./views/searchView";
console.log(`using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}\
. ID is ${searchView.ID}, ${string}`);

