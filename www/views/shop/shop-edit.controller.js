(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService','$ionicHistory',function ($scope,$stateParams,localStorageService,$ionicHistory) {
    $scope.title = $stateParams.title;
    $scope.property = $stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      phone:'15659792958',
      createTime:'2017-9-27 09:09:04',
      name:'',
      ab:'',
      boss:'',
      email:'',
      shopPhone:''
      
    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
