angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contacts = [
        {nome: "Pablo", telefone: "777"},
        {nome: "Nathy", telefone: "69"},
        {nome: "PgSQL", telefone: "5432"},
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: "15", categoria: "Celular"},
        {nome: "Vivo", codigo: "14", categoria: "Celular"},
        {nome: "Tim", codigo: "41", categoria: "Celular"},
        {nome: "GVT", codigo: "25", categoria: "Fixo"},
        {nome: "Embratel", codigo: "21", categoria: "Fixo"},
    ];
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
        var isContatoSelect = contacts.some(function(contact){
            return contact.select;
        });
        return console.log(isContatoSelect);
       };
    $scope.classe = "select";
});