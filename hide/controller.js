angular.module("MyFirstApp",[])
    .controller("FirstController",function($scope,$http){
        $scope.post = [];
        $scope.loading = true;
        $http.get("http://jsonplaceholder.typicode.com/posts")
            .success(function(data){
                console.log(data);
                $scope.posts = data;
                $scope.loading = false;
            })
            .error(function(){
                $scope.posts = [];
                $scope.loading = false;
            });
    });