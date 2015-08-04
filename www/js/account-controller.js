angular.module('starter.account.controller', [])

.controller('AccountCtrl', function ($scope, $state, $ionicModal) {
  $scope.modal = {};
  $scope.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  $scope.recording = false;

  $scope.signIn = function (user) {
    console.log(user);
    $state.go('master.home');
  };

  $scope.signUp = function (user) {
    console.log(user);
    $state.go('master.home');
  };

  $scope.beginRecord = function () {
    $scope.recording = true;
  };

  $scope.stopRecord = function () {
    $scope.recording = false;
  };

  $ionicModal.fromTemplateUrl('templates/new_sound.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
});
