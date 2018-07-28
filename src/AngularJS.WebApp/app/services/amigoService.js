(
function () {

    //não deixa criar variavel sem "var"
    'use strict';

    angular.module('app').service('amigoService', amigoService)

    //$http - responsavel por trafegar os dados do serviço

    amigoService.$inject = ['$http','url'];

    function amigoService($http,url) {

        //Função de primeira classe
        this.listar = function () {
            return $http(
                {
                    url: url + 'amigo/listar',
                    method: 'GET'
                });
        }

        this.cadastrar = function (amigo) {
            return $http(
                {
                    url: url + 'amigo/cadastrar',
                    method: 'POST',
                    data: amigo
                });
        }
    }
}
)
();