app.controller("dashboardController", function($scope) {

    $scope.student =
        JSON.parse(localStorage.getItem("student"));

    $scope.jobs =
        JSON.parse(localStorage.getItem("jobs"));

    $scope.applications =
        JSON.parse(localStorage.getItem("applications"));

    $scope.totalJobs = $scope.jobs.length;
    $scope.totalApplications = $scope.applications.length;

});