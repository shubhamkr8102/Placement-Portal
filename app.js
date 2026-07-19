// Create AngularJS Application

var app = angular.module("placementApp",["ngRoute"]);

app.run(function(){

if(localStorage.getItem("jobs")==null){

var jobs=[

{
company:"TCS",
role:"Software Developer",
package:"7 LPA"
},

{
company:"Infosys",
role:"System Engineer",
package:"6 LPA"
},

{
company:"Wipro",
role:"Project Engineer",
package:"5 LPA"
},

{
company:"Accenture",
role:"Associate Software Engineer",
package:"4 LPA"
}

];

localStorage.setItem("jobs",JSON.stringify(jobs));

}

if(localStorage.getItem("applications")==null){

localStorage.setItem("applications",JSON.stringify([]));

}

});