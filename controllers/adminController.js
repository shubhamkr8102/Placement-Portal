app.controller("adminController", function($scope) {

    $scope.jobs =
        JSON.parse(localStorage.getItem("jobs"));

    $scope.newJob = {};

    $scope.addJob = function() {

        $scope.jobs.push({

            company: $scope.newJob.company,
            role: $scope.newJob.role,
            package: $scope.newJob.package

        });

        localStorage.setItem(
            "jobs",
            JSON.stringify($scope.jobs)
        );

        $scope.newJob = {};

        alert("Job Added Successfully");

    };

    $scope.deleteJob = function(index) {

        $scope.jobs.splice(index, 1);

        localStorage.setItem(
            "jobs",
            JSON.stringify($scope.jobs)
        );

    };

});