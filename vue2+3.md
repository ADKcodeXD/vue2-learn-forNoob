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







