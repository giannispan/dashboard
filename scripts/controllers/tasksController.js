(function() {
    'use strict';

    function TasksController(dashboardFactory, $stateParams, $state, $uibModal) {
        var self = this;

        self.memberId = $stateParams.memberId;

        self.tasks = dashboardFactory.getTasks();

        //Filter tasks for the selected member
        self.filterTasks = function(memberId) {
            var filtered = self.tasks.filter(function(item) {
                    return (item.relationships.member.data.id === $stateParams.memberId);
                })
                //debugger
            return filtered;
        };

        // Opens the add new task modal
        self.open = function() {
            var opts = {
                backdrop: true,
                keyboard: true,
                templateUrl: 'views/modal-templates/modal-addTask-template.html',
                controller: "modalAddTaskController",
                controllerAs: '$ctrl'
            };

            var modalInstance = $uibModal.open(opts);
        };

        // Opens the edit task modal
        self.openEdit = function(id) {
            var opts = {
                backdrop: true,
                keyboard: true,
                templateUrl: 'views/modal-templates/modal-editTask-template.html',
                controller: "modalEditTaskController",
                controllerAs: '$ctrl',
                resolve: {
                    taskId: function() {
                        return id;
                    }
                }
            };

            var modalInstance = $uibModal.open(opts);

            // Here we replace the previous task with the updated one. We use the -.indexOf method to find
            // the index of the old task in the tasks array and then by using splice we remoce it and 
            // replace it with the new one
            modalInstance.result.then(function(data) {
                var index = _.indexOf(self.tasks, _.find(self.tasks, { id: data.id }));
                self.tasks.splice(index, 1, data);
            }, function() {
                //on cancel button press
                console.log("Modal Closed");
            });
        };


        //Delete task
        self.remove = function(item) {
            _.remove(self.tasks, function(task) {
                return item.id === task.id;

            });
            $state.go('tasks');
        };
    }


    angular.module('dashboard')
        .controller('TasksController', TasksController);
})();
