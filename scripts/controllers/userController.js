(function() {
    'use strict';

    function UserController(dashboardFactory, $uibModal, $state, $stateParams) {
        var self = this;

        self.users = dashboardFactory.getUsers();
        //debugger

        // Sorting setup
        self.sortType = 'attributes.first_name';
        self.sortReverse = false;

        self.searchUser = '';

        // Pagination setup
        self.totalItems = self.users.length;
        self.currentPage = 1;
        self.itemsPerPage = 2; // Number of users per page to show

        self.maxSize = 5; //Number of pager buttons to show

        self.setPage = function(pageNo) {
            self.currentPage = pageNo;
        };

        self.pageChanged = function() {
            console.log('Page changed to: ' + self.currentPage);
        };

        self.setItemsPerPage = function(num) {
            self.itemsPerPage = num;
            self.currentPage = 1; //reset to first page
        };

        // Open modal function
        self.open = function(userId) {
            var opts = {
                backdrop: true,
                keyboard: true,
                templateUrl: 'views/modal-templates/modal-member-template.html',
                controller: ModalInstanceController,
                controllerAs: '$ctrl',
                resolve: {
                    user: function() {
                        return _.find(self.users, { id: userId });
                    }
                }
            };

            var modalInstance = $uibModal.open(opts);

            modalInstance.result.then(function(data) {
                //on ok button press, go to corresponding user's tasks page
                $state.go('tasks', { memberId: data })
            }, function() {
                //on cancel button press
                console.log("Modal Closed");
            });
        };
    }

    // This function is the Controller that handles user's actions inside the modal
    // and is responsible for showing the resolved user.
    function ModalInstanceController($uibModalInstance, user) {
        var self = this;

        self.user = user;

        self.ok = function() {
            $uibModalInstance.close(self.user.id);
        };

        self.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    // Uncomment out the following line if JS minification is going to be used
    // UserController.$inject = ['dashboardFactory', '$uibModal', '$state', '$stateParams'];

    angular.module('dashboard')
        .controller('UserController', UserController);
})();
