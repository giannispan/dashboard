'use strict';

angular.module('dashboard')

.service('Authorization', [function() {
     var self = this;  

     // Here we consider the user always authorized 
     self.authorizedUser = true;

     self.isAuthorized = function() {
       return self.authorizedUser;
     };

     return {
       isAuthorized: self.isAuthorized
     }
}]);