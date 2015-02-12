angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/users', {
            templateUrl: 'views/users.html',
            controller: 'UserController'
            
        })
    
        .when('/users/form', {
            templateUrl: 'views/frmCreateUser.html',
            controller: 'UserController'
            
        }).
    
        otherwise({
            templateUrl: 'views/error.html'
        });

    $locationProvider.html5Mode(true);

}]);