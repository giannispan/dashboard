(function() {
    'use strict';


    // This function is the Controller that handles tasks actions inside the modal
    // and is responsible for showing the add new task modal and adding the new task.
    function modalAddTaskController($uibModalInstance, dashboardFactory, $stateParams, $state) {
        var self = this;

        self.memberId = $stateParams.memberId;

        self.tasks = dashboardFactory.getTasks();

        // Find the maximun id in the tasks object, in order to assign the new task
        // to be added to the tasks array the new id (the maximun of ids already in the array
        // plus 10, in order to avoid conflicts)
        self.maxId = function() {
            var maxid = 0;
            self.tasks.map(function(obj) {
                if (obj.id > maxid) maxid = obj.id;
            });
            return maxid;
        }

        // The new task to be added to the user's task list
        self.myTask = {
            "id": parseInt(self.maxId(self.tasks)) + 10,
            "type": "task",
            "attributes": {
                "title": "",
                "role": "",
                "state": "CREATED"
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

        // Add the new tasl to the user's task list
        self.addTask = function() {

            self.tasks.push(self.myTask);

            $uibModalInstance.close();
        }

        self.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular.module('dashboard')
        .controller('modalAddTaskController', modalAddTaskController);
})();
