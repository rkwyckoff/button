function ButtonController ($scope) {
    $scope.val = 0;
    $scope.val2 = "likes"

    $scope.countUp = function () {
      $scope.val += 1;
      console.log($scope.val)
      if ($scope.val === 1) {
        $scope.val2 = "like";
      } else {
          $scope.val2 = "likes"
        }
    }
}

ButtonController.$inject = ['$scope'];

export default ButtonController;
