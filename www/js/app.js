// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.account.controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'AccountCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'AccountCtrl'
  })

  .state('master', {
    url: '/master',
    abstract: true,
    templateUrl: 'templates/master.html'
  })

  .state('master.home', {
    url: '/home',
    views: {
      'master-home': {
        templateUrl: 'templates/home.html',
      }
    }
  })
  .state('master.about', {
    url: '/about',
    views: {
      'master-about': {
        templateUrl: 'templates/about.html',
      }
    }
  });

  $urlRouterProvider.otherwise('/login');
})
