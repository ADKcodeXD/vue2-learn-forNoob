# Vue2.0+3.0

vue：一套用于构建用户界面的渐进式JavaScript框架

渐进式：vue可以自底向上逐层应用 ，指轻量级可以只用vue.js ，重量级可以引入各种插件。



特点：

- 采用组件化模式

- 声明式编码,可以不用操作dom，提高开发的效率。

- vue会把数据转换为虚拟dom，转换为真实dom

## vue2

  

### 第一个vue

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue first</title>
    <script src="./js/vue.js"></script>
</head>

<body>
    <div id="app">
        <h1>hello 我是vue</h1>
    </div>
</body>
<script>
    Vue.config.productionTip = false;
    // 把启动提示删除
    const App=new Vue({
        el:'#app',
        // 指定容器实例
        data:{

        },
        methdos:{

        }
    })
</script>
```

vue2.0的架构，即为上面这样，这可以作为一个模板，以后开发的时候将该代码放入用户自定义片段中。

### 插值表达式

```html
<h1>hello {{title}}</h1>
```

用两个大括号代表一个变量。



### 两个实例的情况

会有一个实例是无法解析的，一个vue容器无法同时接管两个实例。

### 模板语法

#### v-bind:href="url"

v-bind是一个双向绑定的语法，可以简写为:href

会绑定后面的表达式。

也就是双引号里面写的其实是表达式。

```html
<a v-bind:href="url">点击跳转</a>
<a :href="url">点击跳转</a>
```

指令语法，用于解析标签中的属性，事件，等。



#### v-model

双向绑定，可以双向绑定数据，无论哪边修改，都能够实时更新

不过不是什么属性都能用v-model

v-model一般只用于在表单类元素上。

而且默认用在value属性上。

```js
v-model:value="title"
```

### el和data的两种写法

```js
const v=new Vue({
    // el: "#app",
    data: {
        title: "sdasda",
        name: "我是谁"
    }
});
v.$mount('#app')
```

这种写法可以代替el来绑定实例。

mount可以做到挂载。

 除此之外，data除了对象式，也能写成函数式。

```js
const v = new Vue({
    // el: "#app",
    data: function () {
        return {
            title: "sdasda",
            name: "我是谁"
        }
    }
});
v.$mount('#app')
```

在以后组件化之后，必须要使用函数式的data写法。

由vue所管理的函数，必须不能用箭头函数！！！

### MVVM模型

模型 - 视图 - 视图模型

Vue视图就充当着一个视图模型VM

Model（模型）通过VM ，展现到View页面当中，

这就是MVVM模型。data最终会出现到vm身上，且vm上的所有属性都能直接渲染到页面上。

### 数据代理

Object.defineProperty

可以通过三个参数来设置对象原型中的方法和属性。

第一个参数，要修改的对象，第二个属性，属性名，第三个属性，配置项

![image-20211229194605372](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211229194605372.png)

这个方法是可以定义一个属性，且利用get和set和对象不关联的属性关联起来。

也就形成了双向绑定的原理。

```js
let obj={x:100}
let obj2={y:100}

Object.defineProperty(obj2,'x',{
    get (){
        return obj.x;
    },
    set (value){
        obj.x=value;
    }
})
```

vue中的数据绑定，双向绑定，就是通过以上的原理，让两个值做到实时同步。

### vue中的_data

vuee中的data，就是我们传入的配置对象中的data，在vm中会将其定义为_data

数据代理，将_data中的数据，放入到vm当中，都是用到了Object.defineProperty做到的。

### vue绑定事件

```js
<button v-on:click="showInfo">点我</button>

//vm部分
methods:{
    showInfo(event){
        alert("你好啊");
    }
}
```

通过v-on:xxx事件 来绑定。

回调函数写在vue中的methods中。

简写就是@click

```html
<button @click="showInfo">点我</button>
```

这个函数可以接小括号，并使用小括号传参

但是我们在传参的时候怎么把event也保留呢？

使用$占位符传入即可。

```html
<button @click="showInfo2(15,$event)">点我</button>
```

```js
showInfo2(number,event) {
    alert("你好啊" + number);
}
```





### 事件修饰符

prevent 可以阻止我们的事件默认行为。

```html
<a href="http://www.baidu.com" @click.prevent="showInfo">点我</a>
```

prevent可以阻止默认行为，让我们不跳转

还有stop，可以阻止事件冒泡。

once：事件只触发一次。

capture，让事件在捕获阶段就触发，而不是等到冒泡阶段去处理。

### 键盘事件

```js
<input type="text" @keydown.enter="fn1">
```

vue 给常用的按键起了别名。

在capslock绑定事件的时候，不能直接绑定capslock

要使用-连接两个单词。

```html
<input type="text" @keydown.caps-lock="fn1">
```

还有tab这个按键，也很难绑定，因为tab自带切换焦点的功能，

所以必须要用keydown来进行绑定。

也可以通过键码来进行绑定事件。

### 计算属性

要拼接两个姓名，很简单，只需要两个插值表达式即可连接

```html
<div id="app">
    姓：<input type="text" v-model="firstname"><br>
    名：<input type="text" v-model="lastname"><br>
    姓名:<span>{{firstname.slice(0,3)}}-{{lastname}}</span>
</div>
<script>
    new Vue({
        el: "#app",
        data: {
            firstname: "攒",
            lastname: "san"
        }
    });
</script>
```

但是要考虑到以后的变化的话，就要进行一些封装，我们可以借助methods

```html
<div id="app">
    姓：<input type="text" v-model="firstname"><br>
    名：<input type="text" v-model="lastname"><br>
    姓名:<span>{{fullname()}}</span>
</div>
<script>
    new Vue({
        el: "#app",
        data: {
            firstname: "攒",
            lastname: "san"
        },
        methods: {
            fullname() {
                firstname = this.firstname.slice(0, 3);
                return firstname + '-' + this.lastname
            }
        }
    });
</script>
```

我们借助methods封装一个函数即可，用插值表达式调用函数即可获得新的数据。

但是这样也是有点麻烦。

因此，可以引入一个新的概念叫做计算属性。

**vue认为data里的所有值都是属性**

要新建一个计算属性，要新建一个全新的对象，叫做computed

```js
computed:{

}
```

```js
computed: {
    fullname: {
        get() {
            console.log("get被调用了");
            let fn = this.firstname.slice(0, 5);
            let ln = this.lastname;
            return fn + '-' + ln;
        }
    }
}
```

这里面的就是计算属性。

![image-20211229213206048](D:\Code 练习\前端\toWeb\vue2.0+3.0\image-20211229213206048.png)

可以见到每次修改值的时候，get都会被调用，



#### 简写

确定了只读不改的情况下，才可以使用简写。

```js
fullname(){
    return fn + '-' + ln;
}
```



### 监视属性 watch

想使用监视，要使用一个新配置：watch

```js
watch:{
    isHot:{
        handler(){
            console.log("被修改")
        }
    }
}
```

![image-20211229220120123](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211229220120123.png)

可见这个属性被修改了，handler中的语句也被执行了。

```js
immediate:true,
```

这个配置能让初始化时让handler调用一下

```vue
vm.$watch('isHot', {
            immediate: true,
            isHot: {
                handler() {
                    console.log("被修改")
                }
            }
        })
```

这样也可以做到上面那种效果。



### 深度监视

深度监视，要监视一个数组或者对象里面的属性，就要使用到深度监视。

一般要监视data里的对象或者数组里的属性更改时

```js
'numbers.a': {
    handler() {
        console.log("a被修改")
    }
}
```

但如果是numbers:{ ...}

numbers里的值变化的时候，watch函数的语句是不会执行的。

如果我们配置了deep:ture,就可以检测到对象内部的值发送改变。

```js
numbers: {
    deep:true,
        handler(newValue,oldValue) {
        console.log("a被修改")
    }
}
```

这样就能检测到numbers里面的数字发生改变了，![image-20211229221636431](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211229221636431.png)

且可以简写：

```js
numbers(newValue, oldValue) {
    console.log("a被修改")
}
```

代价就是，不能配置deep等配置项了。

#### 定时器回调函数

定时器的回调函数，是js管理的，必须得用箭头函数。

因为他不由vm管理，写成普通函数，this会默认指定为windows

#### watch对比computed

watch能完成的 ，computed不一定能完成，watch能完成的事情最大优势就是在于，watch中可以使用异步任务。

### 绑定样式

```js
<div :class="box">
    test
</div>
```

通过vuedata写入class的属性，可以在dom中动态更换class

绑定多个样式，可以用一个数组放入所有要用到的样式。

也有对象写法：

```js
arr2: {
    box1: true,
    box2: false
}
```



### v-show && v-if

底层实现是display

false即为none

**和v-if的区别为，v-if会直接在dom树中干掉这个节点**

v-show不会

一般不建议使用v-if 使用v-show效率会更高。

同样的，有v-if 有v-else-if 也有v-else

### 模板template

```html
<template>
    <div>

    </div>
</template>
```

只能配合v-if使用，且这个东西不会破坏原本的结构。



### 列表渲染

```html
<ul v-for="person in persons">
    <li>{{person.id}}</li>
    <li>{{person.name}}</li>
</ul>
```

```js
data: {
    persons: [{
        id: 111,
        name: "zhangsan"
    },
              {
                  id: 222,
                  name: "lisi"
              },
              {
                  id: 333,
                  name: "wangwu"
              }
             ]
}
```

读取的一般就是一个数组里面包含多个对象。也能遍历一个对象数据类型的数据。

```html
<ul v-for="person in persons" key>
```

key 这个数据特别重要！

算是每一个li的标识

vue会把每个项都加上一个id和index

不过遍历对象的时候，先遍历出来的是value，后遍历出来的是key

### vue中的key

```html
<ul v-for="(p,index) in persons" :key="index">
    <li>{{p}}---{{index}}</li>
</ul>
```

key会通过传入的值在虚拟dom中生成唯一的标识。

如果这时候dom更改了，他会对比虚拟dom。如果key是没有更改的，那么他就不会更改其他dom元素。

如果更改了，且dom内容也被更改（表单元素除外），这时候就会更改dom元素。

为了我们能够每次修改都能有正确的展.示效果，因此我们会利用数据库传来的id值作为元素的唯一标识。而不是dom生成的index.

![image-20211230131620161](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230131620161.png)

使用index作为唯一标识（key）

![image-20211230131710164](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230131710164.png)

使用id值作为key唯一标识。

也就是说，vue的diff算法，会对比这个key值并作为是否重新生成dom结构的依据。

 

### 列表过滤

![image-20211230133735612](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230133735612.png)

通过v-model来搜索并过滤列表的功能实现。

首先我们先用v-model绑定表单数据，其次再使用watch来尝试实现。

```js
content(val) {
    this.persons = this.persons.filter((p) => {
        return p.name.indexOf(val) !== -1;
    })
}
```

通过filter来返回符合条件的元素

```js
watch: {
    immediate: true,
        content: {
            immediate:true,
                handler(val) {
                this.filpersons = this.persons.filter((p) => {
                    return p.name.indexOf(val) !== -1;
                })
            }
        }
}
```

由于我们可以通过搜索空字符串代表其有，没有

watch相对来说比较麻烦，可以使用computed

```js
computed: {
    filpersons() {
        return this.persons.filter((p) => {
            return p.name.indexOf(this.content) !== -1;
        })
    }
}
```

#### 列表排序

```js
computed: {
                filpersons() {
                    const arr = this.persons.filter((p) => {
                        return p.name.indexOf(this.content) !== -1;
                    })
                    if (this.sortType !== 0) {
                        arr.sort((a, b) => {
                            return this.sortType === 1 ? b.age - a.age : a.age - b.age;
                        })
                    }
                    return arr;
                }
            }
```

通过sort函数，可以进行实时的排序列表



### vue 检测数据改变原理

vue拿到data后，第一步就是加工data，第二步让vm._data=data

_data里所有的属性都会增加getset方法，里面的方法是重新解析模板，

重新解析模板就会生成虚拟dom，虚拟dom会和dom进行对比，最后更新页面。



但是vue是如何检测数据的变化的呢？首先猜想一：定时器，否定。

猜想二：getset，也否定。

实际上是使用了一个observer，汇总对象中所有属性形成了一个数组。

对每个key遍历，并使用object.defineproperty这个函数对key进行get和set的设置。



### Vue.set

我们想要去后添加一个数据的话。可以使用vue.set这个方法来进行添加数据。

这样添加数据，能够让observer读取多一次，并让vue容器给这个数据添加数据代理。达到和原页面一样的效果。

**局限性，只能往data里面的对象里的属性添加，不能添加到data里**



另外，data里面的数组数据，是没有get和set绑定的，也就是即使改了数组里的内容，vue也监测不到你更改了数组里的数据。

只有调用了数组里面的几个方法来修改数组里的内容，vue才会认为你修改了数组

例如unshift push splice 等

原因，vue对数组的几个方法做了一点包装，能够让vue监测到你对数组进行了操作。

vue做了什么操作

- 第一件事，正常调用push
- 第二件事，重新进行解析dom页面。

### 收集表单数据

checkbox要定义一个数组类型去存储value，如果不是数组类型，checkbox默认只会设置boolean值。

![image-20211230155542030](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230155542030.png)

可见以上的表单结构需要的数据结构为下：

```js
data: {
    username: "",
        password: "",
            sex: "man",
                hobby: [],
                    city: "",
}
```

### 过滤器

本质是一个函数，可以使用管道运算符，把数据通过过滤器里的函数来进行处理。

```js
filters:{
    timeformat() {
        return dayjs(this.time).format(' MM-DD-HH:mm:ss');
    }
}
```

```html
<h2>过滤器：{{time | timeformat}}</h2>
```

![image-20211230161604904](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230161604904.png)

可以进一步优化，把this.time改成value，因为模板里面就已经传入了参数time

#### 全局过滤器的配置

```js
Vue.fliter('xxx',function(value){
    return xxx;
})
```

可以在vm实例之外定义一个全局过滤器，这个过滤器可以应用到所有组件。

### v-text

更常使用插值表达式，一般用于给dom元素插入文字

相当于innerText

### v-html

即对标签插入html语义标签

**v-html存在严重的安全性问题，会导致xss攻击，只能在可信的内容上使用html**

### v-cloak

指令避免了网速过慢或者其他情况，造成的外部资源无法引入的情况。

要么把元素加载出来，要么不加载。

可以配合css进行使用

```css
[v-cloak]{
    width: auto;
    height: auto;
    background-color: ;
}
```

### v-once

v-once所在的dom节点，在初次渲染之后，就会成为静态内容。

之后修改数据也不会改变其节点内容

### v-pre

v-pre可以让vue跳过这个节点，也就是不解析这个节点。只呈现原生的内容，不作为vue容器内的内容来解析。

### 自定义指令

```js
directives:{
    big(){
        //不靠返回值
        console.log("big");
    }
}
```

这个big就可以被我们使用v-big来进行调用了。

```js
big(element,binding) {
    //不靠返回值
    console.log("big");
}
```

自定义指令两个形参能够获得指令所在的元素和绑定的dom元素。



#### v-fbind

由于指令和元素会有一个绑定阶段，在绑定阶段，vue对元素的操作是无法呈现到页面上的。

因此我们要引入对象式自定义指令，这样我们可以分别指定三个函数为三个阶段，来执行我们指令的不同周期。

```js
fbind: {
    bind() {
        //成功绑定的时候
        console.log("bind");
    },
        inserted() {
            //指令所在元素被插入页面时调用
            console.log("inserted");
        },
            update() {
                console.log("update");
            }
}
```

**全局指令：Vue.directive(指令名,对象或者函数)**

### 生命周期

Vue生命周期介绍

#### mounted

 挂载生命周期，在页面挂载后执行函数。

当Vue完成模板的解析，并把初始的真实的dom元素放入页面后，调用mounted

只会调用一次。

第一个生命周期函数

#### beforeCreate()

这个时候数据还未进行数据代理，也就是数据仍未存在。

然后进入到初始化阶段，初始化会进行数据监测和数据代理。

![image-20211230193104164](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230193104164.png)

#### created（）

创建后，这个时候数据代理和数据监测都已完成。

![image-20211230193428617](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230193428617.png)

从这个阶段之后，vue开始解析模板，生成虚拟dom并放入内存中，页面暂时不能显示解析好的内容。

#### beforeMount()

这个阶段，页面展现的是未经编译的页面。而且在这个阶段操作的dom，最终都不凑效。

![image-20211230193714535](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230193714535.png)

这个阶段会把所有的虚拟dom都存入到$el这个对象中，

#### mounted()

此时页面中呈现的都是经过vue编辑的dom，致此初始化结束。

![image-20211230194118702](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230194118702.png)



#### 执行周期

这个期间就会一直监听页面中的数据，如果一有数据更新，就会进行update生命周期

![image-20211230195307054](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230195307054.png)

#### beforeUpdate()

数据是新的，页面是久的，即页面未和数据保持同步。

#### updated()

页面和数据保持了同步

#### beforeDestroy()

![image-20211230195519179](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211230195519179.png)

当我们执行vm.$destroy(),就会进入到销毁流程，这个流程中所有的data methods都可用，在此阶段会

关闭定时器，订阅消息等。但是所有对数据的修改，函数，都不会更新到页面当中了。



#### destroyed()

彻底销毁vm容器，清理它与其他实例的连接，数据不再影响dom元素和页面。





### 组件化

#### 非单文件组件

非单文件组件，即一个文件中包含有n个组件。

创建组件注意项：

- 不能写el配置项
- data必须要是函数式对象

```js
//组件1 
const school = Vue.extend({
    // 不写el配置项，因为最终由一个vm管理
    data() {
        //data必须要是函数式对象
        return {
            studentname: "wanglaowu",
            schoolname: "taiping",
        }
    }
})
//组件2
const info = Vue.extend({
    data() {
        return {
            sex: "man",
            age: 18
        }
    }
})
```

第一步，新建一个组件，利用vue.extend函数

```js
new Vue({
    el: "#app",
    components:{
        school,
        info
    }
});
```

第二步，注册组件

```js
template: `
<div>
<h1>学生姓名:{{studentname}}</h1>
<h1>学校名:{{schoolname}}</h1>
</div>
`
```

第三步，定义template属性，并使用自定义标签

