(function () {
  'use strict';

  angular.module('LunchCheck', [])

    .controller('LunchCheckController', function ($scope) {
      $scope.lunchMenu
      $scope.checkLunchMenu = function () {
        if ($scope.lunchMenu) {
          var len = $scope.lunchMenu.split(',').length
          $scope.lunchMenu = len <= 3 ? "Enjoy!" : "Too much!"
        } else {
          $scope.lunchMenu = "Please enter data first"
        }
      };
    });

})();
