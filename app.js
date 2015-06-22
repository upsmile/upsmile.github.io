var grhViewModule = angular.module("grhView",[]);
grhViewModule.controller("GraphController",function($scope){
 var date = Date.Now();
 var dates = [];
 for (var i = 0; i < 6; i++) {
   dates.push(date.addDay(-i))
 };
});
