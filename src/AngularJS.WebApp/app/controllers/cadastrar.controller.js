(
function () {

    //não deixa criar variavel sem "var"
    'use strict';

    angular.module('app').controller('cadastrarController', cadastrarController);

    cadastrarController.$inject = ['$scope', 'amigoService','$state'];

    function cadastrarController($scope, amigoService,$state) {

        //View Model
        var vm = this;

        vm.amigo = {};

        vm.cadastrar = function () {

            //Espera uma promisse
            amigoService.cadastrar(vm.amigo).then(sucesso, erro);
        }

        function sucesso(retorno) {
            alert(retorno.data);
            $state.go('layout.listar');
        }

        function erro(retorno) {
            alert(retorno.data);
        }


        
    }

}
)
();