//专门使用这个来管理路由
import VueRouter from 'vue-router';

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail';

const router = new VueRouter({
    mode:'history',
    routes: [{
            name: 'xiangqing',
            path: '/about',
            component: About
        },
        {
            name: 'jia',
            path: '/home',
            component: Home,
            children: [{
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta:{isAuth:true},
                    beforeEnter: (to, from, next) => {
                        // ...
                    }
                },
                {
                    name: 'xinxi',
                    path: 'message',
                    component: Message,
                    children: [{
                        name: 'detailname',
                        path: 'detail/:id/:title',
                        component: Detail,
                        props($route) {
                            return {
                                id: $route.query.id,
                                title: $route.query.title
                            }
                        }
                    }]
                }
            ]
        }
    ]
})
// 全局前置 路由守卫  每次路由切换之前 和初始化的时候会被调用
router.beforeEach((to, from, next) => {
    if(to.meta.isAuth){
        if (localStorage.getItem('school') === 'foshsan') {
            next()
        }
    }else{
        next()
    }
})
//全局后置路由守卫  
router.afterEach((to,from)=>{
    
})

//独享路由守卫

export default router;