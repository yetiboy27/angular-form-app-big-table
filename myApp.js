var myApp = angular.module('myApp', []);

myApp.controller('formController', ['$scope',
	function($scope) {

		$scope.step = 1;

        $scope.nextStep = function() {
            $scope.step++;
        }

        $scope.prevStep = function() {
            $scope.step--;
        }

        //$scope.areaInterest = '';
        $scope.$watch('areaInterest', function () {

	     //    if ($scope.areaInterest == 'Undecided') {
	     //    	$scope.stepTwoHeader = 'Undecided';
	    	// }
	    	if ($scope.areaInterest == 'Business') {
	        	$scope.stepTwoHeader = 'Business leaders have a bullish future ahead of them.';        
	        }
	        else if ($scope.areaInterest == 'CIS') {
	        	$scope.stepTwoHeader = 'The tech industry is programmed for opportunity.';        
	        }
	        else if ($scope.areaInterest == 'Education') {
	        	$scope.stepTwoHeader = 'Educators have a bright future ahead of them.';        
	        }
	        else if ($scope.areaInterest == 'Healthcare') {
	        	$scope.stepTwoHeader = 'Health care\'s prognosis is full of opportunity.';        
	        }
	        else if ($scope.areaInterest == 'STEM') {
	        	$scope.stepTwoHeader = 'A background in science is a formula for success.';        
	        }
	        else if ($scope.areaInterest == 'HSS') {
	        	$scope.stepTwoHeader = 'Community involvement and leadership begins with understanding.';        
	        }
	        else{
	        	$scope.stepTwoHeader = 'Pick Something';

	        }
	    });

		        $scope.$watch('programName', function () {

		        	programGuids = ['4f8fa38a-52b1-e011-b7aa-005056b8001d', '3b8fa38a-52b1-e011-b7aa-005056b8001d', '3cd33fb3-a2d8-e411-8793-005056b8001d',
		        	'478fa38a-52b1-e011-b7aa-005056b8001d', 'd5ba80cb-38df-e511-80ed-0a42e3c7e6c9', '33e1874f-bada-e311-baca-005056b8001d', 'e97fd3ec-c356-e311-9122-005056b8001d',
		        	'08ab0f66-bada-e311-baca-005056b8001d', '5c8fa38a-52b1-e011-b7aa-005056b8001d', '2638ab84-52b1-e011-b7aa-005056b8001d',
		        	'ae625e75-72fd-e411-8793-005056b8001d', '5b8fa38a-52b1-e011-b7aa-005056b8001d' ];

			        
			        if (~programGuids.indexOf($scope.programName)) {
			        	
			        	$scope.stepTwoParagraph = 'It appears you\'ll be using the Centralized Application Service (CAS). To get started, please fill out the information below. Once you\'ve enrolled in your first class, we\'ll give you a Regis University book bag. On the next page, you can also share your ambition with the world as part of our Big Table community. Don\'t forget to tell us who sent you here!';
			    	}			    	
			        else{
			        	$scope.stepTwoParagraph = 'We\'ll email you a code that lets you apply for free. Just fill out the information below. On the next page, you can also share your ambition with the world as part of our Big Table community. Don\'t forget to tell us who sent you here!';

			        }
			    });       


	}
]);
