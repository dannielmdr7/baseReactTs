import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyLoad/pages/NoLazy';


type JSXComponent = () => JSX.Element

interface Route {
  to:string;
  path:string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent ;
  name:string;
}

const LazyLayout = lazy(() => import( /* webpackChunkName:"LazyLayout" */ '../01-lazyLoad/layout/LazyLayout'))
export const routes:Route[] =[
  {
    to:'/lazyload/',
    path:'/lazyload/*',
    Component:LazyLayout,
    name:'LazyLayout - Dash'
  },
  {
    to:'/no-lazy',
    path:'no-lazy',
    Component:NoLazy,
    name:'No Lazy'
  }
]