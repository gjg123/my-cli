import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Read from '@/components/Read'
import Music from '@/components/Music'
import Movie from '@/components/Movie'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Index from '@/components/Index'
import M1 from '@/components/M1'
import M2 from '@/components/M2'
import Q1 from '@/components/Q1'
import Q2 from '@/components/Q2'
import G1 from '@/components/G1'
import G2 from '@/components/G2'
import N1 from '@/components/N1'
import N2 from '@/components/N2'
import S1 from '@/components/S1'
import S2 from '@/components/S2'
import X1 from '@/components/X1'
import X2 from '@/components/X2'
import N11 from '@/components/N11'
import N12 from '@/components/N12'
import New from '@/components/New'
import TabbarItem from '@/components/TabbarItem'
import Tabbar from '@/components/Tabbar'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld', component: HelloWorld },
    {path: '/Main',name: 'Main',component: Main },
    {path: '/Read',name: 'Read',component: Read },
    {path: '/Music',  name: 'Music', component: Music},
    {path: '/Home',  name: 'Home', component: Home},
    {path: '/Login',  name: 'Login', component: Login},
    {path: '/Index',  name: 'Index', component: Index},
    {path: '/New',  name: 'New', component: New},
    {path: '/TabbarItem',  name: 'TabbarItem', component: TabbarItem},
    {path: '/Tabbar',  name: 'Tabbar', component: Tabbar},
    {
    	path: '/Movie',    	 
    	component: Movie,
    	children: [   	 
    		
    		{path: 'Q1', component: Q1},
    		{path: 'Q2', component: Q2},
    		{path: 'M1', component: M1},
    		{path: 'M2', component: M2},
    		{path: 'G1', component: G1},
    		{path: 'G2', component: G2},
    		{
    			path: 'N1', 
    			component: N1,
    			children: [
    				{path: 'N11', component: N11},
    			  {path: 'N12', component: N12}
    			]
    		},
    		{path: 'N2', component: N2},
    		{path: 'S1', component: S1},
    		{path: 'S2', component: S2},
    		{path: 'X1', component: X1},
    		{path: 'X2', component: X2}
    		
    	]
    }
    
  ]
})
