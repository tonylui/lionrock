var lionrock = angular.module('lionrock',['ui.bootstrap']);

lionrock.run(function($rootScope){
	$rootScope.appName = "LionRock";
	$rootScope.isNewTrail = true;
});

lionrock.controller('newTrailCtrl', function($scope, $http){

	$scope.max = 5;
	$scope.trailInfo = {};
	$scope.trailInfo.difficulty = 1;
	$scope.trailInfo.category = '香港';
	$scope.trailInfo.steps = [];

	$scope.send = function(){
		$http.defaults.useXDomain = true;

		$http({
			url: 'http://localhost:5000/trails',
			method: "POST",
			data: JSON.stringify($scope.trailInfo),
			headers: {
				'Content-Type' : 'application/json'
            }
		}).success(function(data,status,headers,config){
			$scope.isNewTrail = false;
		}).error(function(data,status,headers,config){
			console.log('oops');
		});
	};

	$scope.displayJson = function(){
		alert(JSON.stringify($scope.trailInfo));
	};

	$scope.remove = function(index){
		$scope.trailInfo.steps.splice(index,1);
	};

	$scope.hoveringOver = function(value){
		$scope.overStar = value;
	}


});