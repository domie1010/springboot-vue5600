import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import lingyongguihuan from '@/views/modules/lingyongguihuan/list'
    import news from '@/views/modules/news/list'
    import wuzi from '@/views/modules/wuzi/list'
    import wuzicaigou from '@/views/modules/wuzicaigou/list'
    import wuzidiaopei from '@/views/modules/wuzidiaopei/list'
    import wuzijuanzeng from '@/views/modules/wuzijuanzeng/list'
    import wuzipaifa from '@/views/modules/wuzipaifa/list'
    import xiaoquguanli from '@/views/modules/xiaoquguanli/list'
    import xuqiutongji from '@/views/modules/xuqiutongji/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhiyaunzhe from '@/views/modules/zhiyaunzhe/list'
    import zhiyuanzhepaiqian from '@/views/modules/zhiyuanzhepaiqian/list'
    import dictionaryLingyongguihuan from '@/views/modules/dictionaryLingyongguihuan/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWuzi from '@/views/modules/dictionaryWuzi/list'
    import dictionaryWuzicaigouYesno from '@/views/modules/dictionaryWuzicaigouYesno/list'
    import dictionaryZhiyuanzhepaiqian from '@/views/modules/dictionaryZhiyuanzhepaiqian/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryLingyongguihuan',
        name: '操作类型',
        component: dictionaryLingyongguihuan
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWuzi',
        name: '物资类型',
        component: dictionaryWuzi
    }
    ,{
        path: '/dictionaryWuzicaigouYesno',
        name: '采购审核',
        component: dictionaryWuzicaigouYesno
    }
    ,{
        path: '/dictionaryZhiyuanzhepaiqian',
        name: '派遣类型',
        component: dictionaryZhiyuanzhepaiqian
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/lingyongguihuan',
        name: '物资领用归还',
        component: lingyongguihuan
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/wuzi',
        name: '物资',
        component: wuzi
      }
    ,{
        path: '/wuzicaigou',
        name: '物资采购',
        component: wuzicaigou
      }
    ,{
        path: '/wuzidiaopei',
        name: '物资调配',
        component: wuzidiaopei
      }
    ,{
        path: '/wuzijuanzeng',
        name: '物资捐赠',
        component: wuzijuanzeng
      }
    ,{
        path: '/wuzipaifa',
        name: '物资派发',
        component: wuzipaifa
      }
    ,{
        path: '/xiaoquguanli',
        name: '小区管理员',
        component: xiaoquguanli
      }
    ,{
        path: '/xuqiutongji',
        name: '需求收集',
        component: xuqiutongji
      }
    ,{
        path: '/yonghu',
        name: '采购员',
        component: yonghu
      }
    ,{
        path: '/zhiyaunzhe',
        name: '自愿者',
        component: zhiyaunzhe
      }
    ,{
        path: '/zhiyuanzhepaiqian',
        name: '志愿者调派',
        component: zhiyuanzhepaiqian
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
