
// debugger;
var app = angular.module('my-app',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function ($rp,$lp) {
  debugger;
  $lp.html5Mode(false);
  $rp
    .when('/view1',{
    template:'<div> {{$name}} <a href="#view2"> View2 </a></div>',
      controller:['$scope',function($scope){
          $scope.name='View 1';
      }]
  }).when('/view2',{
    template:'<div> {{$name}} <a href="#view1"> View1 </a> </div>',
      controller:['$scope',function($scope){
          $scope.name='View 2';
      }]
  }).otherwise({redirectTo:'/view1'});
}]) ;

app.run(function(){
  // debugger;
});

// alert('app-loaded');
