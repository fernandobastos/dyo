angular.module('UserService', [])

    .factory('CrudUserService',['$resource', function($resource) {
        return $resource('api/users/:id', null, {
            'update': { method:'PUT' }
        });
    }])

    .service('UserObject', ['$rootScope', function($rootScope){
        var userObject = null;
        
        this.setUserObject = function(user){
            userObject = user; 
        }
        
        this.getUserObject = function(){
           return userObject; 
        }
    }]);

