'use strict'

export default function(router){
    router.map({
        '/':{				//首页
            name:'home',
            component: require('./views/index.vue')
        },

        '/nav':{
            name: 'nav',
            component: require('./views/nav.vue')
        },

        '/tribe':{
            name: 'tribe',
            component: require('./views/tribe.vue')
        },

        '/save':{
            name: 'save',
            component: require('./views/save.vue'),
        },

        '/scan':{
            name: 'scan',
            component: require('./views/scan.vue'),
        },

        '/lost':{
            name: 'lost',
            component: require('./views/lost.vue'),
        }
    })
}