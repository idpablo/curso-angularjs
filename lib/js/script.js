angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
    $scope.app = "Contatos";
    $scope.contacts = [];
    $scope.operadoras = [];

    var loadingContacts = function(){
        $http.get("http://localhost:8080/agenda").success(function(data){
            $scope.contacts = data;
        });
    };

    var loadingOperators = function(){
        $http.get("http://localhost:8080/operadoras").success(function(data){
            $scope.operadoras = data;
        });
    };

    $scope.addContact = function (contact){
            $scope.contacts.push(angular.copy(contact));
            delete $scope.contact;
    };
    $scope.removeContact = function (contacts){
       $scope.contacts = contacts.filter(function (contact){
        if (!contact.select) return contact; 
        });
    };
    $scope.isRemoveContact = function(contacts){
        return contacts.some(function(contact){
            return contact.select;
        });
    };
    $scope.orderPer = function(camp){
        $scope.orderFilter = camp;
        $scope.directOrder = !$scope.directOrder;
    };
    $scope.callAddContact = function(){
        var camp = true;
        return $scope.callAddContact.campAdd = camp;
    };
    $scope.classe = "select";
    loadingContacts();
    loadingOperators();
});