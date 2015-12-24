import home from './index';

describe('Controller: Home', function() {
    var $rootScope, $controller, $q, ctrl;

    beforeEach(angular.mock.module(home));

    beforeEach(angular.mock.inject(function(_$controller_, _$q_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $q = _$q_;
        $controller = _$controller_;
        ctrl = $controller('HomeController');
    }));

    it('test', function() {
        expect(ctrl.str).toEqual('hello, world.');
    });
});
