/**
 * yoleth-themepicker
 * @version v1.0.0 - 2016-06-29
 * @author Mael Kermann
 * @link https://github.com/yoleth/yoleth-themepicker
 *
 **/

(function() {
    'use strict';

    var scripts = document.getElementsByTagName("script")
    var currentScriptPath = scripts[scripts.length-1].src;

    angular.module('yoleth.themepicker', []);

    angular.module('yoleth.themepicker')
        .directive('ylTheme', [function () {
        return {
            scope       : {themes: '=ylThemes', ngModel: '='},
            require     : 'ngModel',
            templateUrl : currentScriptPath.replace('yoleth-themepicker.js', 'yoleth-themepicker.html'),
            link        : function ($scope) {
                $scope.selectTheme = function(theme){
                    $scope.ngModel  = theme;
                };
            }
        };
    }]);

})();
