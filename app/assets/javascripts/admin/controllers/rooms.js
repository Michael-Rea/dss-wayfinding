Admin.controller("RoomsCtrl", ["$scope", "$routeParams", "Rooms",
    function($scope, $routeParams, Rooms) {
        $scope.rooms = Rooms.query({},
            function(data) {
                $scope.loaded = true;
                
            },
            function(data) {
                $scope.mesg = "Error retrieving rooms from server. Please try again later.";
            }
        );

        /*
         * Changes the room that is displayed in the form.
         * TODO: Display error messages.
        */
        $scope.changeRoom = function(id) {
            Rooms.get({id: id}, function(data) { $scope.room = data; });
        };

        $scope.update = function(room) {
            room.$update();
        };

        // Sets the room to the room specified in the URL, if given.
        if ($routeParams.id) {
            $scope.changeRoom($routeParams.id);
        }
    }
]);
