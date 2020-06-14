 function productCtrl($scope) {
    $scope.description ='Iphone 6S';
    $scope.cost = 80;
    $scope.qty =1 ;
}
function timectrl($scope , $http) {
    $http.get('js/file.json') 
    .success( function(data) {
        $scope.session = data.session ;
    }).error( function (data) {
        console.log('error')
    });
}