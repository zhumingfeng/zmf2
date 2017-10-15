(function () {
  'use strict'
  angular.module('starter.controllers')
    .controller('CategoryListCtrl',['$scope', function ($scope) {
      $scope.categories = [
        {
          ID: 1,
          Name: '1',
          Children: [
            {
              ID: 11,
              Name: '11',
              Children: []
            },
            {
              ID: 12,
              Name: '12',
              Children: []
            },
            {
              ID: 13,
              Name: '13',
              Children: []
            },
            {
              ID: 14,
              Name: '14',
              Children: []
            }
          ]
        },
        {
          ID: 2,
          Name: '2',
          Children: [
            {
              ID: 21,
              Name: '21',
              Children: []
            },
            {
              ID: 22,
              Name: '22',
              Children: []
            },
            {
              ID: 23,
              Name: '23',
              Children: []
            },
            {
              ID: 24,
              Name: '24',
              Children: []
            }
          ]
        },
        {
          ID: 3,
          Name: '3',
          Children: [
            {
              ID: 31,
              Name: '31',
              Children: []
            },
            {
              ID: 32,
              Name: '32',
              Children: []
            },
            {
              ID: 33,
              Name: '33',
              Children: []
            },
            {
              ID: 34,
              Name: '34',
              Children: []
            }
          ]
        },
        {
          ID: 4,
          Name: '4',
          Children: [
            {
              ID: 41,
              Name: '41',
              Children: []
            },
            {
              ID: 42,
              Name: '42',
              Children: []
            },
            {
              ID: 43,
              Name: '43',
              Children: []
            },
            {
              ID: 44,
              Name: '44',
              Children: []
            }
          ]
        },
      ];
      $scope.activeCategory = {};
      if ($scope.categories.length > 0) {
        $scope.activeCategory = $scope.categories[0];
      }
      $scope.seleCategory = function (index) {
        if ($scope.activeCategory.ID != $scope.categories[index].ID) {
          $scope.activeCategory = $scope.categories[index];
        }
      };

      $scope.selectSubCategory = function (data) {
        console.log(data);
        $scope.activeSubCategory = data;
        $ionicHistory.goBack();
      };


      $scope.showActionSheet = function () {
        $ionicActionSheet.show({
          buttons:[
            {
              text:'<b>新增小分类</b>'
            },
            {
              text:'编辑分类'
            }
          ],
          cancelText:'取消',
          buttonClicked:function (index) {
            switch (index){
              case 0:
                    $scope.gotoCategoryAdd();
                    break;
              case 1:
                    
                    break;
            }
          },
          titleText:'更多操作'
        });
      };
      $scope.gotoCategoryAdd = function () {
        location.href = '#/app/category-add' + $scope.activeCategory.ID + '/' +$scope.activeCategory.Name
      }
    }]);
})();
