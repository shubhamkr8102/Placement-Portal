app.controller("profileController", function($scope) {

    $scope.student =
        JSON.parse(localStorage.getItem("student"));

    $scope.saveProfile = function() {

        localStorage.setItem(
            "student",
            JSON.stringify($scope.student)
        );

        alert("Profile Updated Successfully");

    };

});