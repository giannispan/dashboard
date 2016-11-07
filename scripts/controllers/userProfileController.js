(function() {
    'use strict';

    function userProfileController(dashboardFactory, $stateParams) {
        var self = this;

        // Get the user selected object
        self.user = dashboardFactory.getUser($stateParams.memberId);

        self.tasks = dashboardFactory.getTasks();

        //Filter tasks for the selected user
        self.filterTasks = function(memberId) {
            var filtered = self.tasks.filter(function(item) {
                    return (item.relationships.member.data.id === $stateParams.memberId);
                })
                //debugger
            return filtered;
        };

    }

    angular.module('dashboard')
        .controller('userProfileController', userProfileController);
})();
