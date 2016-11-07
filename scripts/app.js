(function() {

    'use strict';

    angular
        .module('dashboard', ['ui.router', 'ui.bootstrap'])
        .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        // route for the home page
            .state('dashboard', {
            url: '/member',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                },
                'content': {
                    templateUrl: 'views/member.html',
                    controller: 'UserController as vm'
                },
            }
            // route for the tasks page
        }).state('tasks', {
            url: '/member/:memberId/tasks',
            views: {
                'header': {
                    templateUrl: 'views/header2.html',
                },
                'content': {
                    templateUrl: 'views/tasks.html',
                    controller: 'TasksController as vm'
                },
            }

            // route for the user profile page
        }).state('profile', {
            url: '/member/:memberId/profile',
            views: {
                'header': {
                    templateUrl: 'views/header3.html',
                },
                'content': {
                    templateUrl: 'views/profile.html',
                    controller: 'userProfileController as vm'
                },
            }

        });

        $urlRouterProvider.otherwise('/');
    })

    // We listen to the event $stateChangeSuccess to check user's permissions 
    // in every state change
    .run(['$rootScope', '$state', 'Authorization', function($rootScope, $state, Authorization) {

     $rootScope.$on('$stateChangeSuccess', function() {
       if (Authorization.isAuthorized()) {
           alert("User is authorized");
       } else {
           // redirect the user to home page
           console.log("User is not authorized");
       }
     });
    }])
   
})();