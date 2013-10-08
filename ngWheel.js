(function() {
	/**
	 * AngularJS ng-wheel directive
	 *
	 * Adds support for ng-scroll event attribute to bind on mouse wheel events
	 *
	 * @example <ANY ng-scroll="callOnScroll()"></ANY>
	 */

	angular.module('ngWheel', []).directive('ngWheel', ['$parse', function($parse) {
		return function(scope, element, attr) {
			var fn = $parse(attr['ngWheel']);

			element.bind('scroll', function(event) {
				scope.$apply(function() {
					fn(scope, {
						$event: event
					});
				});
			});
		};
	}]);

}.call(this));