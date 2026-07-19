app.controller("loginController", function($scope, $location) {

    $scope.user = {};

    $scope.login = function() {

        if ($scope.user.username == "admin" &&
            $scope.user.password == "admin123") {

            localStorage.setItem("role", "admin");
            $location.path("/admin");

        } else {

            localStorage.setItem("role", "student");
            localStorage.setItem("student", JSON.stringify($scope.user));
            $location.path("/dashboard");

        }

    };

});