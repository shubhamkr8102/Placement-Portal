app.controller("jobsController", function($scope) {

    $scope.jobs =
        JSON.parse(localStorage.getItem("jobs"));

    $scope.applications =
        JSON.parse(localStorage.getItem("applications"));

    $scope.apply = function(job) {

        $scope.applications.push({

            company: job.company,
            role: job.role,
            package: job.package,
            status: "Applied"

        });

        localStorage.setItem(
            "applications",
            JSON.stringify($scope.applications)
        );

        alert("Application Submitted Successfully");

    };

});