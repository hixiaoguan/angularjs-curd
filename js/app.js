var routerApp = angular.module('routerApp', ['ui.router','pageList','showCont','addCont','modifyCont','xg.page']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'main@index': {
                    templateUrl: 'tpls/login.html'
                }
            }
        })
        .state('list', {
            url: '/{type:[0-9]{1,4}}',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/list.html'
                },
                'type@list': {
                    templateUrl: 'tpls/type.html'
                },
                'grid@list': {
                    templateUrl: 'tpls/grid.html'
                }
            }
        })
        .state('add', {
            url: '/add',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/add.html'
                },
                'type@add': {
                    templateUrl: 'tpls/type.html'
                },
                'addcon@add': {
                    templateUrl: 'tpls/addcon.html'
                }
            }
        })
        .state('modify', {
            url: '/modify/:Id',
            views: { 
                '': {
                    templateUrl: 'tpls/modify.html'
                },
                'type@modify': {
                    templateUrl: 'tpls/type.html'
                },
                'modifycon@modify': {
                    templateUrl: 'tpls/modifycon.html'
                }
            }
        })
        .state('show', {
            url: '/show/:Id',
            views: { 
                '': {
                    templateUrl: 'tpls/show.html'
                },
                'type@show': {
                    templateUrl: 'tpls/type.html'
                },
                'showcon@show': {
                    templateUrl: 'tpls/showcon.html'
                }
            }
        })
        // .state('add', {
        //     url: '/add',
        //     templateUrl: 'tpls/add.html'
        // })
        // .state('show', {
        //     url: '/show/:Id', //注意这里在路由中传参数的方式
        //     templateUrl: 'tpls/show.html'
        // })
        // .state('modify', {
        //     url: '/modify/:Id', //注意这里在路由中传参数的方式
        //     templateUrl: 'tpls/modify.html'
        // })

});
