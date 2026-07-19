app.controller("applicationsController", function($scope) {

    $scope.applications =
        JSON.parse(localStorage.getItem("applications"));

});