var appRoot = angular.module('myApp', []);

// appRoot.service('addImageService', function(){
//   this.addImageFunction = function(){
//     $scope.vm.imageUrls = [
//       "https://images.unsplash.com/photo-1535726890525-b0557398cb32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
//       "https://images.unsplash.com/photo-1545573139-feec87d23486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
//       "https://images.unsplash.com/photo-1529907109632-2a4924535fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
//       "https://images.unsplash.com/photo-1529831129093-0fa4866281ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=2133&q=80",
//       "https://images.unsplash.com/photo-1546525374-64a93a33db58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//       "https://images.unsplash.com/photo-1523286435788-0abb75f0fbd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1289&q=80",
//       "https://images.unsplash.com/photo-1549725731-e8b29d266553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
//     ];
//   }
// })


appRoot.controller('AppController', ['$scope', function ($scope){
  $scope.vm = {};

  $scope.vm.message = "Welcome to angularjs directive";

  $scope.vm.imageUrls = [
    "https://images.unsplash.com/photo-1535726890525-b0557398cb32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1545573139-feec87d23486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1529907109632-2a4924535fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
    "https://images.unsplash.com/photo-1529831129093-0fa4866281ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=2133&q=80",
    "https://images.unsplash.com/photo-1546525374-64a93a33db58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1523286435788-0abb75f0fbd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1289&q=80",
    "https://images.unsplash.com/photo-1549725731-e8b29d266553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  ];
}]);