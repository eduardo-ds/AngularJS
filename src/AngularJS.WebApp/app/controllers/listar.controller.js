(
function () {

    //não deixa criar variavel sem "var"
    'use strict';

    angular.module('app').controller('listarController',listarController);

    listarController.$inject = ['$scope','amigoService'];

    function listarController($scope,amigoService) {
        
        //View Model
        var vm = this;
        
        vm.listaAmigos = [];
        vm.listaAmigos = MockObjects(vm.listaAmigos);
        
        //Consumindo a API externa no AZURE
        /*
        amigoService.listar().then(function (retorno) {
        vm.listaAmigos = retorno.data;
        });                
        */
    }

    function MockObjects(vm) {

        vm.push({
            id: 1,
            nome: "usuario A",
            email: "usuario.a@Outlook.com.br",
            telefone: "1234"
        });

        vm.push({
            id: 2,
            nome: "usuario B",
            email: "usuario.b@Outlook.com.br",
            telefone: "1234"
        });

        vm.push({
            id: 3,
            nome: "usuario C",
            email: "usuario.c@Outlook.com.br",
            telefone: "1234"
        });

        return vm;
    }

}
)
();