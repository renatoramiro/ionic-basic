angular.module('starter.account.controller', [])

.controller('AccountCtrl', function ($scope, $state) {
  $scope.signIn = function (user) {
    console.log(user);
    $state.go('master.home');
  };

  $scope.signUp = function (user) {
    console.log(user);
    $state.go('master.home');
  };
});
