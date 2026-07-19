app.config(function($routeProvider){

$routeProvider

.when("/",{

templateUrl:"pages/login.html",
controller:"loginController"

})

.when("/dashboard",{

templateUrl:"pages/dashboard.html",
controller:"dashboardController"

})

.when("/jobs",{

templateUrl:"pages/jobs.html",
controller:"jobsController"

})

.when("/applications",{

templateUrl:"pages/applications.html",
controller:"applicationsController"

})

.when("/profile",{

templateUrl:"pages/profile.html",
controller:"profileController"

})

.when("/admin",{

templateUrl:"pages/admin.html",
controller:"adminController"

})

.otherwise({

redirectTo:"/"

});

});