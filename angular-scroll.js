(function() {
	/**
	 * AngularJS ng-scroll directive
	 *
	 * Adds support for ng-scroll event attribute to bind on mouse wheel events. Use the `$event` local variable
	 * to access the jQuery event object
	 *
	 * @example <ANY ng-scroll="onScroll($event)"></ANY>
	 * @author Darlan Alves <darlan@moovia.com>
	 * Modified by Pablo Pernias <pablo@pernias.com>
	 */
	angular.module('ngScroll', []).directive('ngScroll', ['$parse', function($parse) {
		return function(scope, element, attr) {
			var fn = $parse(attr.ngScroll);

			element.bind('scroll', function(event) {
				/*scope.$apply(function() {
				});*/
				//Don't apply in every scroll, that's just dumb & slow...
				fn(scope, {
					$event: event
				});
			});
		};
	}]);

}.call(this));
