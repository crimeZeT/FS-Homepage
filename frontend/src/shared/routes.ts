import type { RouteRecordRaw } from 'vue-router'
import fav2 from '@static/favicon2.svg'
import studentSvg from '@components/main/student.svg'
import localizedRoutes from './localizedRoutes.json'

const defaultLayout = () => import('@components/main/content.vue'/* webpackChunkName: "home" */)

export const basePaths = {
  home: '/',
  dashboard: '/',
  account: '/'
} as const

let headerRoutes: RouteRecordRaw[] = [
  {
    path: "",
    component: () => import('@components/main/home.vue'/* webpackChunkName: "home" */),
    meta:
    {
      title: 'home'
    }
  },
  /*{
        path: "wahl",
        component: () => import('@components/main/hochschulwahl.vue'/* webpackChunkName: "home" *//*),
meta:
{
favicon: require('@components/main/wal.svg'),
title: "Hochschulwa(h)l",
}
},*/
  {
    path: "vertreter",
    component: () => import('@components/main/vertreter.vue'/* webpackChunkName: "home" */),
    meta:
    {
      favicon: fav2,
      title: "representatives"
    }
  },
  {
    path: "erstis",
    component: () => import('@components/main/erstis.vue'/* webpackChunkName: "home" */),
    meta:
    {
      favicon: studentSvg,
      title: "freshers"
    }
  },
  {
    path: "keinePanik",
    component: () => import('@components/main/panik.vue'/* webpackChunkName: "home" */),
    meta:
    {
      title: "noPanic"
    }
  },
  {
    path: "externe",
    component: () => import('@components/main/externals.vue'/* webpackChunkName: "home" */),
    meta:
    {
      title: "externals"
    }
  },
  {
    path: "blog/:id",
    component: () => import('@components/main/blog.vue' /* webpackChunkName: "home" */),
    meta:
    {
      title: "blog"
    }
  }
]

let footerRoutes: RouteRecordRaw[] = [
  {
    path: "impressum",
    component: () => import('@components/main/impressum.vue'/* webpackChunkName: "footer" */),
    meta:
    {
      title: "imprint"
    }
  },
  {
    path: "sprechstunden",
    component: () => import('@components/main/sprechstunden.vue'/* webpackChunkName: "footer" */),
    meta:
    {
      title: "consultationHours"
    }
  },
  {
    path: "kontakt",
    component: () => import('@components/main/kontakt.vue'/* webpackChunkName: "footer" */),
    meta:
    {
      title: "contact"
    }
  },
  {
    path: "test",
    component: () => import('@components/editor/editor.vue' /* webpackChunkName: "footer" */),
    meta:
    {
      title: "test"
    }
  }
]

let routes: RouteRecordRaw[] = [
  {
    path: "",
    component: () => import('@components/404.vue'),
    meta:
    {
      title: "error404"
    }
  }
]
export { headerRoutes, footerRoutes }

export function allRoutes()
{
  return routes.concat(headerRoutes).concat(footerRoutes)
}

export function routerCompilation(): RouteRecordRaw[]
{
  return [
    {
      path: basePaths.home,
      component: defaultLayout,
      children: headerRoutes.concat(footerRoutes)
    },
    {
      path: '/:catchAll(.*)',
      component: defaultLayout,
      children: routes
    }
  ]
}