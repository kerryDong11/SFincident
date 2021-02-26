import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/message',
    component: Layout,
    redirect: '/message',
    children: [{
      path: '/message',
      name: 'Message',
      component: () => import('@/views/message/index'),
      meta: { title: 'MESSAGE', icon: 'dashboard' }
    }]
  }
]
export const scynRoutes = {
  'admin': {
    'path': '/system',
    'redirect': '/menu',
    'component': 'Layout',
    'meta': {
      'title': '系统管理',
      'icon': 'form'
    },
    'children': [
      {
        'path': '/menu',
        'name': 'menu',
        'component': 'menu/index',
        'meta': {
          'title': '菜单管理',
          'icon': 'table'
        }
      }, {
        'path': '/roles',
        'name': 'roles',
        'component': 'roles/index',
        'meta': {
          'title': '角色管理',
          'icon': 'table'
        }
      }, {
        'path': '/administrator',
        'name': 'administrator',
        'component': 'dashboard/index',
        'meta': {
          'title': '用户管理',
          'icon': 'table'
        }
      }
    ]
  },
  'information':{
    'path': '/information',
    'name': 'information',
    'component': 'Layout',
    'redirect': '/information',
    'meta': {
      'title': '基础资料',
      'icon': 'table'
    },
    'children': [
      {
        'path': '/vendorInfo',
        'name': 'vendorInfo',
        'component': 'VendorInfo/index',
        'meta': {
          'title': '委托商管理',
          'icon': 'table'
        }
      },{
        'path': '/trialDispatch',
        'name': 'trialDispatch',
        'component': 'TrialDispatch/index',
        'meta': {
          'title': '试验派工类型',
          'icon': 'table'
        }
      }]
  },
  'equipment':{
       'path': '/equipment',
      
      'component': 'Layout',
      'redirect': '/equipments',
      
      'children': [
        {
          'path': '/equipment',
          'name': 'equipment',
          'component': 'equipment/index',
          'meta': {
            'title': '设备管理',
            'icon': 'table'
          }
        }]
  },
  'warehouse': {
    'path': '/warehouse',
    'redirect': '/warehouse',
    'component': 'Layout',
    'meta': {
      'title': '仓库管理',
      'icon': 'form'
    },
    'children': [
      {
        'path': '/inStore',
        'name': 'inStore',
        'component': 'inStore/index',
        'meta': {
          'title': '入库管理',
          'icon': 'table'
        }
      },
      {
        'path': '/newInStore',
        'name': 'newInStore',
        'component': 'inStore/newInStore',
        'meta': {
          'title': '新增入库',
          'icon': 'table'
        }
      }, {
        'path': '/outStore',
        'name': 'outStore',
        'component': 'outStore/index',
        'meta': {
          'title': '出库管理',
          'icon': 'table'
        }
      },
      {
        'path': '/newOutStore',
        'name': 'newOutStore',
        'component': 'outStore/newOutStore',
        'meta': {
          'title': '新增出库',
          'icon': 'table'
        }
      }
    ]
  },
  'project':{
    'path': '/project',
    'redirect': '/project/program/managepro',
    'component': 'Layout',
    'name':"project",
    'meta': {
      'title': '工单',
      'icon': 'form'
    },
    'children': [
      {
        'path': 'program',
        'name': 'program',
        'redirect': 'project/program/management/index',
        component: 'project/program/index', // Parent router-view
        'meta': {
          'title': '实验项目',
          'icon': 'table'
        },
        children:[
          {
            path: '/managepro',
            component: 'project/program/management/index',
            name: 'management',
            meta: { title: '试验任务管理' }
          },
          {
            path: '/newpro',
            component: 'project/program/newProgram/index',
            name: 'newProgram',
            meta: { title: '新建试验任务' }
          },
          {
            path: '/newProincident',
            component: 'project/program/newIncident/index',
            name: 'newProincident',
            meta: { title: '创建工单' }
          }
        ]
      },
      {
        'path': 'laboratory',
        'name': 'laboratory',
        'redirect': '/project/laboratory/incidentOverview/index',
        component: 'project/laboratory/index', // Parent router-view
        'meta': {
          'title': '工单-实验室',
          'icon': 'table'
        },
        children:[
          {
            path: '/incidentOverview',
            component: 'project/laboratory/incidentOverview/index',
            name: 'incidentOverview',
            meta: { title: '工单 实验室主管' }
          },
          {
            path: '/assignIncident',
            component: 'project/laboratory/assignIncident/index',
            name: 'assignIncident',
            meta: { title: '实验室主管-工单分配' }
          }
        ]
      },
      {
        'path': 'experimenter',
        'name': 'experimenter',
        'redirect': '/project/experimenter/incident',
        component: 'project/experimenter/index', // Parent router-view
        'meta': {
          'title': '工单-实验室',
          'icon': 'table'
        },
        children:[
          {
            path: '/experIncident',
            component: 'project/experimenter/incident/index',
            name: 'experIncident',
            meta: { title: '工单' }
          },
          {
            path: 'incidentprocess',
            component: 'project/experimenter/process/index',
            name: 'incidentprocess',
            meta: { title: '领取工单任务' }
          }
        ]
      }
    ]
  }
}

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
