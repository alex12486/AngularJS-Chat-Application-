function enterPress() {

	return function(scope, element, attrs){

		element.bind('keydown keypress', function(event) {
			if(event.which === 13) {
				scope.$apply(function() {
					scope.$eval(attrs.enterPress)
				});
				event.preventDefault();
			}
		});

	};

}



angular.module('Chat')
	.directive('enterPress', [enterPress]);