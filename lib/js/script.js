angular.module("listaFilmes", []);
angular.module("listaFilmes").controller("listaFilmesCtrl", function ($scope, $http) {
    $scope.app = "Contatos";
    $scope.filmes = [];
    $scope.operadoras = [];

    var url = "https://mocki.io/v1/9a7c1ca9-29b4-4eb3-8306-1adb9d159060";

    var loadfilmes = function(){
        $http.get(url).success(function(data){
            $scope.filmes = data;
            data => JSON.stringify(data);
            console.log(data);
        });
    }

    $scope.addFilme = function (filme){
            $scope.filmes.push(angular.copy(filme));
            delete $scope.filme;
    };
    $scope.removeFilme = function (filmes){
       $scope.filmes = filmes.filter(function (filme){
        if (!filme.select) return filme; 
        });
    };
    $scope.orderPer = function(camp){
        $scope.orderFilter = camp;
        $scope.directOrder = !$scope.directOrder;
    };
    $scope.callAddfilme = function(){
    };
    $scope.classe = "select";

    loadfilmes();

    
});