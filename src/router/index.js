import Vue from 'vue'
import Router from 'vue-router'
import Found from '@/components/Found'

Vue.use(Router)

export default new Router({
  routes: [
	{
        path: '/',
        name: 'root',
	    components: {
	      	main:Found
	    }
    }
  ]
})
