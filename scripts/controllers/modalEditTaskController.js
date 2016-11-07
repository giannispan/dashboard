(function() {
    'use strict';


    // This function is the Controller that handles tasks actions inside the modal
    // and is responsible for showing the edit task modal and updating the selected task.
    function modalEditTaskController($uibModalInstance, dashboardFactory, $stateParams, $state, taskId) {
        var self = this;

        self.memberId = $stateParams.memberId;

        self.myTask = angular.copy(dashboardFactory.getTask(taskId));

        // Update the task
        self.updateTask = function(newTask) {

            newTask = {
                "id": taskId,
                "type": "task",
                "attributes": {
                    "title": self.myTask.attributes.title,
                    "role": self.myTask.attributes.role,
                    "state": self.myTask.attributes.state
                },
                "relationships": {
                    "member": {
                        "data": {
                            "id": self.memberId
                        }
                    }
                },
                "category": {
                    "data": {
                        "id": 200,
                        "type": "category"
                    }
                }
            };

            // On modal close we store the new task object in order to retrieve it later
            $uibModalInstance.close(newTask);
        }

        // On cancel button pressed
        self.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular.module('dashboard')
        .controller('modalEditTaskController', modalEditTaskController);
})();
