angular.module('UserCtrl', [])
    .controller('UserController',['$scope', 'CrudUserService', 'UserObject', '$location', function($scope, CrudUserService, UserObject, $location) {
        var id = 0;
        $scope.requestObject = {};
        $scope.requestObject.user = {
            id: 0,
            name: "",
            age: "",
            enabled: false
        };
        
        $scope.init = function(){         
            $scope.users = CrudUserService.query(); 
            $scope.frmTopic = 'Create user';
            $scope.fillUserData();
        }
        
        $scope.fillUserData = function(){ //Fill the textboxes if the UserObject service has data.
            if(angular.equals(UserObject.getUserObject(), null) == false){
             $scope.requestObject.user = UserObject.getUserObject();
             id = $scope.requestObject.user._id;
            }        
        }       
        
        $scope.save = function(){           
            if(angular.equals(id, 0)){          
                $scope.createUser();
            }else{
                $scope.updateUser();
            }        
            $location.url("/users");
        }
        
        $scope.updateUser = function(){
            CrudUserService.update({id: id}, $scope.requestObject.user);
        }
        
        $scope.createUser = function(){
             var user = new CrudUserService({name: $scope.requestObject.user.name, age: $scope.requestObject.user.age, enabled:               
                                                $scope.requestObject.user.enabled});               
                
            user.$save(function(){
                
            });
        }
        
        $scope.loadUserFrm = function(user){ //User function on the presentation layer
            UserObject.setUserObject(user); 
            $location.url('/users/form');
        }
        
        $scope.remove = function(pid, index){ //User function on the presentation layer
            if (confirm("Do you want to delete this user?") == true) {
                CrudUserService.remove({id: pid}, function(){
                    window.location.reload();
                });   
            }
        }
        
        $scope.init();      
    }]);